![1776679683415](image/DEPLOY_KNOWLEDGE/1776679683415.png)![1776679684656](image/DEPLOY_KNOWLEDGE/1776679684656.png)![1776679685612](image/DEPLOY_KNOWLEDGE/1776679685612.png)![1776679686837](image/DEPLOY_KNOWLEDGE/1776679686837.png)![1776679716049](image/DEPLOY_KNOWLEDGE/1776679716049.png)![1776679717571](image/DEPLOY_KNOWLEDGE/1776679717571.png)![1776679724619](image/DEPLOY_KNOWLEDGE/1776679724619.png)![1776679739826](image/DEPLOY_KNOWLEDGE/1776679739826.png)# Деплой React-сайта на Springhost через GitHub

## Что нужно иметь
- Готовый React + Vite проект на GitHub
- Аккаунт на Springhost (куплен хостинг)
- Домен на Рег.ру

---

## 1. Настройка GitHub Actions

Создать файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Springhost

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install & Build
        run: |
          rm -f package-lock.json
          npm install
          npm run build

      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.4
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
          server-dir: /public_html/
```

> `rm -f package-lock.json` — обязательно. Иначе package-lock с Windows ломает сборку на Linux.

---

## 2. Секреты GitHub

Репозиторий → **Settings → Secrets and variables → Actions → New repository secret**

| Секрет | Где взять |
|--------|-----------|
| `FTP_SERVER` | Письмо от Springhost: «Сервер FTP» |
| `FTP_USERNAME` | Письмо от Springhost: «Логин» |
| `FTP_PASSWORD` | Письмо от Springhost: «Пароль» |

---

## 3. Файл .htaccess (для React Router)

Создать `public/.htaccess` в проекте:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

Без него страницы кроме главной дают 404.

---

## 4. Подключение домена (Рег.ру → Springhost)

**На Рег.ру:**
1. Мои домены → выбрать домен → DNS-серверы → Изменить
2. Указать:
   - `ns1.sprinthost.ru`
   - `ns2.sprinthost.ru`

**На Springhost (cp.sprinthost.ru):**
1. Раздел «Домены» → Добавить домен → ввести свой домен

> DNS обновляется до 24 часов.

---

## 5. Как работает деплой

```
git push → GitHub Actions → npm run build → FTP upload → сайт обновлён
```

Каждый `git push` в ветку `main` автоматически обновляет сайт.

---

## Частые ошибки

| Ошибка | Решение |
|--------|---------|
| `Cannot find native binding` | Добавить `rm -f package-lock.json` в workflow |
| `No url found for submodule` | `git rm --cached <папка>` + commit |
| 404 на страницах | Добавить `public/.htaccess` |
| Домен не работает | Подождать до 24 часов после смены DNS |
| `fatal: No url found for submodule path 'ui-ux-pro-max-skill'` | Папка когда-то была зарегистрирована как git-сабмодуль. Даже после удаления из гита CI падает, потому что `checkout@v3` по умолчанию пытается инициализировать подмодули. **Решение:** добавить `submodules: false` в checkout (см. раздел 6). |

---

## 6. ⚠️ Исправленный deploy.yml (актуальная версия)

Старый вариант с `checkout@v3` без явного отключения сабмодулей **ломает деплой**, если в истории репозитория когда-либо была папка-сабмодуль.

**Правильный `deploy.yml`:**

```yaml
name: Deploy to Springhost

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: false   # ← ОБЯЗАТЕЛЬНО, если была папка-сабмодуль

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22.x'

      - name: Install & Build
        run: |
          rm -rf package-lock.json node_modules
          npm install
          npm run build

      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.4
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
          server-dir: /public_html/
```

**Изменения относительно старого варианта:**
- `checkout@v3 → v4` (актуальная версия)
- `submodules: false` — явно отключает инициализацию сабмодулей
- `setup-node@v3 → v4`
- `node-version: '18' → '20'` (лучше совместим с современными зависимостями)

---

## 7. Оптимизация изображений в WebP

В проекте есть скрипт `scripts/optimize-images.js` (использует `sharp`).

**Запуск:**
```bash
node scripts/optimize-images.js
```

**Что делает:**
- Ищет все `.png/.jpg/.jpeg` в `./`, `public/` и `src/assets/images/`
- Конвертирует в `.webp` с качеством 80
- Ограничивает ширину до 2000px
- Сохраняет результат в `src/assets/images/`

**После конвертации** — обновить импорты в компонентах с `.png` на `.webp`:
```tsx
// Было:
import cover from '../assets/images/cover.png';
// Стало:
import cover from '../assets/images/cover.webp';
```

> Экономия: от 0.5 до 7+ MB на каждом изображении.
