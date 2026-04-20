import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const INPUT_DIR = './';
const OUTPUT_DIR = './src/assets/images';

// Создаем папку, если ее нет
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimize() {
    console.log('🚀 Начинаю оптимизацию изображений...');

    // Ищем все PNG и JPG в корне, в public и в src/assets/images
    const files = await glob(['*.{png,jpg,jpeg}', 'public/*.{png,jpg,jpeg}', 'src/assets/images/*.{png,jpg,jpeg}']);

    for (const file of files) {
        const filename = path.basename(file);
        const ext = path.extname(file);
        const nameWithoutExt = filename.replace(ext, '');
        const outputPath = path.join(OUTPUT_DIR, `${nameWithoutExt}.webp`);

        console.log(`📦 Обработка: ${filename}...`);

        try {
            await sharp(file)
                .resize({ width: 2000, withoutEnlargement: true }) // Ограничиваем ширину для производительности
                .webp({ quality: 80 }) // Конвертируем в WebP с качеством 80
                .toFile(outputPath);

            const statsBefore = fs.statSync(file);
            const statsAfter = fs.statSync(outputPath);
            const saved = ((statsBefore.size - statsAfter.size) / 1024 / 1024).toFixed(2);

            console.log(`✅ Готово: ${filename} -> ${nameWithoutExt}.webp (Сэкономили ${saved} MB)`);
        } catch (err) {
            console.error(`❌ Ошибка на файле ${filename}:`, err);
        }
    }

    console.log('\n✨ Оптимизация завершена! Все изображения теперь в src/assets/images в формате .webp');
}

optimize();
