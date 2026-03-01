import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Shield, Globe, Play, Menu, X, Twitter, Github, ArrowLeft, Heart, Share, BarChart2 } from 'lucide-react';
import Aurora from '../components/Aurora';

const TECH_STACK = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Figma', 'Node.js', 'Framer Motion', 'Vite', 'PostgreSQL', 'GraphQL'];

const CASES = [
  {
    id: 1,
    title: 'Оформление аудитории для «Магнит теха»',
    category: 'Интерьеры',
    likes: 21,
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop',
    description: 'Для Центрального университета в студии создали оформление брендированной аудитории «Магнит теха», который разрабатывает цифровые продукты для группы компаний «Магнит». Обновление аудитории стало частью реализации плана по поддержке талантливых и целеустремленных студентов.',
    additionalText: 'Основной слоган компании — «Без предела». Его математическое воплощение содержит ключевые элементы, из которых складывается фирменный паттерн. Придуманная нами классная мебель также повторяет форму математических символов. Она не имеет жесткой основы, с легкостью брендирует любое пространство и обладает максимальной функциональностью.',
    fullImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Айдентика Первого кредитного бюро Казахстана',
    category: 'Логотип и шрифт',
    likes: 14,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop',
    description: 'Разработка современного стиля и айдентики для ПКБ, отражающего надежность, технологичность и прозрачность финансовых процессов.',
    additionalText: 'Обновленный логотип стал более строгим и лаконичным, а фирменный паттерн символизирует потоки данных и цифровизацию.',
    fullImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Линейка мобильных аксессуаров «Ви-эл-пи»',
    category: 'Промышленный дизайн',
    likes: 52,
    image: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?q=80&w=1000&auto=format&fit=crop',
    description: 'Дизайн премиальной линейки зарядок, кабелей и портативных аккумуляторов для современных устройств.',
    additionalText: 'Особое внимание уделено тактильным ощущениям и премиальным материалам. В их основе чистые формы и минимум лишних деталей.',
    fullImage: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2000&auto=format&fit=crop',
  }
];


const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCase, setActiveCase] = useState<number | null>(null);

  const activeCaseData = CASES.find(c => c.id === activeCase);

  if (activeCaseData) {
    return <CaseStudy data={activeCaseData} onClose={() => setActiveCase(null)} />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-[#F27D26] selection:text-white bg-black">
      <div className="atmosphere" />

      {/* ── НАВИГАЦИЯ ── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] w-full bg-black border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#F27D26] flex items-center justify-center shadow-[0_0_15px_rgba(242,125,38,0.4)]">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl text-white italic">Nexus</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-white/70">
            <a href="#features" className="hover:text-white transition-colors duration-200 cursor-pointer">Блоги</a>
            <a href="#about" className="hover:text-white transition-colors duration-200 cursor-pointer">Портфолио</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-200 cursor-pointer">Цены</a>
            <a href="#faq" className="hover:text-white transition-colors duration-200 cursor-pointer">Вопросы</a>
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden md:block text-[15px] font-medium text-white/70 hover:text-white transition-colors duration-200 cursor-pointer">
              Войти
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full text-[15px] font-semibold hover:bg-[#F27D26] hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Начать
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-white cursor-pointer"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu md:hidden w-full bg-black border-b border-white/5 px-6 py-8 flex flex-col gap-6 text-white animate-in slide-in-from-top duration-300">
            <a href="#features" onClick={() => setMenuOpen(false)} className="text-[15px] font-medium text-white/70 hover:text-white transition-colors cursor-pointer">Блоги</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-[15px] font-medium text-white/70 hover:text-white transition-colors cursor-pointer">Портфолио</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-[15px] font-medium text-white/70 hover:text-white transition-colors cursor-pointer">Цены</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="text-[15px] font-medium text-white/70 hover:text-white transition-colors cursor-pointer">Вопросы</a>
            <hr className="border-white/10" />
            <button className="w-full bg-white text-black py-4 rounded-full text-[15px] font-semibold cursor-pointer hover:bg-[#F27D26] hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              Начать
            </button>
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-4 md:pt-8 text-white">
        {/* ── ГЕРОЙ ── */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center w-full overflow-visible">
          {/* Динамическая Аврора на всю ширину экрана */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden opacity-40">
            <Aurora
              colorStops={["#000005", "#F27D26", "#3636F5"]}
              amplitude={1.2}
              blend={0.6}
              speed={0.5}
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="w-full max-w-7xl mx-auto flex flex-col items-center relative"
          >
            {/* Надзаголовок */}
            <motion.div
              variants={fadeUp}
              className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[13px] font-medium tracking-wider uppercase text-white/50"
            >
              Smart Develop & Design
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[44px] md:text-[92px] font-extrabold tracking-tight md:tracking-[-3px] max-w-5xl mx-auto leading-[1.1] md:leading-[1] mb-8 pb-4 text-gradient"
            >
              Я — Никита Чендев. <br className="hidden md:block" />
              Создаю сайты <span className="text-[#F27D26]">будущего</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[18px] md:text-[24px] text-white/40 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
            >
              Автоматизированная разработка со скоростью звука. <br className="hidden md:block" />
              Результат, который вы получите уже завтра.
            </motion.p>

            {/* Кнопки действия */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 mb-20 relative z-20">
              <button className="glow-button px-10 py-5 bg-[#F27D26] text-white rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(242,125,38,0.3)] flex items-center gap-2">
                Запустить проект
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-xl text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Смотреть кейсы
              </button>
            </motion.div>



          </motion.div>
        </section>
        {/* ── БЛОК 01: ГОРЯЧЕЕ ПРЕДЛОЖЕНИЕ (SWISS STYLE) ── */}
        <section className="bg-[#F27D26] py-32 md:py-48 px-6 relative z-10 w-full overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Техническая метка */}
            <div className="md:col-span-1">
              <span className="text-white/40 font-mono text-sm font-bold">01/</span>
            </div>

            {/* Основной контент */}
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-[40px] md:text-[82px] font-extrabold tracking-[-0.04em] leading-[0.95] text-white mb-16">
                  Покажу первую <br />
                  рабочую версию <br />
                  сайта уже сегодня <br />
                  — <span className="opacity-50">бесплатно.</span>
                </h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <button className="group relative flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all duration-300">
                    Начать работу
                    <div className="w-8 h-8 rounded-full bg-black/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </motion.div>
              </motion.div>
            </div>


          </div>
        </section>

        {/* ── БЛОК: SMART DEVELOP STATEMENT ── */}
        <section className="bg-black py-20 md:py-32 px-6 relative z-10 w-full overflow-hidden border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col items-start text-left relative z-10">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[42px] md:text-[88px] font-extrabold tracking-[-0.03em] leading-[1] mb-12 text-white"
            >
              А почему <br />
              так круто?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-4xl space-y-8"
            >
              <p className="text-[24px] md:text-[44px] font-bold text-white leading-[1.2] tracking-tight">
                Я автоматизировал весь процесс разработки, используя искусственный интеллект для написания чистого и идеального кода под моим контролем.
              </p>

              <p className="text-[19px] md:text-[28px] text-white/40 leading-relaxed font-medium">
                В итоге вы получаете сайт с полного нуля, с внедрением всех интеграций и настройкой SEO всего за 2–4 дня. То, что раньше требовало штата целой команды, теперь автоматизировано благодаря Smart Develop.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── ТЕХНОЛОГИЧЕСКИЙ СТЕК ── */}
        <section className="py-10 border-b border-white/5 overflow-hidden bg-black">
          <div className="marquee-track gap-14 items-center">
            <div className="flex gap-14 items-center shrink-0 animate-marquee">
              {TECH_STACK.map((tech, j) => (
                <span key={j} className="text-xs font-semibold tracking-[0.2em] text-white/20 uppercase font-sans whitespace-nowrap">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── БЛОК 03: СРАВНЕНИЕ ПОДХОДОВ ── */}
        <section id="features" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10 w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <span className="text-white/40 font-mono text-sm font-bold mb-4 block">03/</span>
              <h2 className="text-[40px] md:text-[64px] font-extrabold tracking-[-0.03em] leading-[1.1] text-white">
                Почему Smart Develop <br />
                эффективнее традиционного подхода
              </h2>
            </div>
            <p className="text-white/40 text-lg max-w-sm md:text-right font-medium">
              Сквозное сравнение: как автоматизация меняет правила игры на каждом этапе.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* ── ШАПКА ТАБЛИЦЫ ── */}
            <div className="grid grid-cols-2 gap-8 md:gap-16 border-b border-white/20 pb-6 mb-8 md:mt-0">
              <div className="text-white/60 font-semibold text-base md:text-lg">
                «Как у всех» <span className="font-medium opacity-60 hidden md:inline">(Стандартный рынок)</span>
              </div>
              <div className="text-[#F27D26] font-semibold text-base md:text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 hidden md:block" />
                Smart Develop <span className="font-medium opacity-80 hidden md:inline">(Custom + AI)</span>
              </div>
            </div>

            {/* ── ТЕЛО ТАБЛИЦЫ ── */}
            <div className="flex flex-col">

              {/* Ряд 1: Сроки */}
              <div className="py-10 border-b border-white/5 group relative">
                <h3 className="text-2xl md:text-[32px] md:leading-[1.1] font-extrabold text-white mb-8 tracking-tight">Срок выхода на рынок (Go-to-market)</h3>
                <div className="grid grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-white/[0.08] group-hover:backdrop-blur-md border border-transparent group-hover:border-white/10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] focus:outline-none">
                    <h4 className="text-lg md:text-xl font-semibold text-white/90 mb-2">3—4 недели.</h4>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">Потеря прибыли из-за долгого ожидания запуска.</p>
                  </div>
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-[#F27D26]/[0.22] group-hover:backdrop-blur-xl border border-transparent group-hover:border-[#F27D26]/40 group-hover:shadow-[0_0_60px_rgba(242,125,38,0.25)] focus:outline-none">
                    <div className="hidden md:block absolute -left-8 top-6 bottom-6 w-px bg-white/10 group-hover:opacity-0 transition-opacity duration-200" />
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center flex-wrap gap-2 md:gap-3">
                      2–4 дня.
                      <span className="px-2 py-0.5 rounded-md bg-[#F27D26]/20 text-[#F27D26] text-[10px] md:text-[11px] font-bold group-hover:bg-[#F27D26] group-hover:text-white transition-colors">X10 Faster</span>
                    </h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">Использование AI для генерации кода сокращает рутину на 80%.</p>
                  </div>
                </div>
              </div>

              {/* Ряд 2: Контент */}
              <div className="py-10 border-b border-white/5 group relative">
                <h3 className="text-2xl md:text-[32px] md:leading-[1.1] font-extrabold text-white mb-8 tracking-tight">Работа с контентом</h3>
                <div className="grid grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-white/[0.08] group-hover:backdrop-blur-md border border-transparent group-hover:border-white/10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] focus:outline-none">
                    <h4 className="text-lg md:text-xl font-semibold text-white/90 mb-2">Найм копирайтера</h4>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">Риск срыва сроков и «воды» в текстах.</p>
                  </div>
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-[#F27D26]/[0.22] group-hover:backdrop-blur-xl border border-transparent group-hover:border-[#F27D26]/40 group-hover:shadow-[0_0_60px_rgba(242,125,38,0.25)] focus:outline-none">
                    <div className="hidden md:block absolute -left-8 top-6 bottom-6 w-px bg-white/10 group-hover:opacity-0 transition-opacity duration-200" />
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">AI-Копирайтинг.</h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">Генерация смыслов на основе болей ЦА. Готовый контент за 15 минут.</p>
                  </div>
                </div>
              </div>

              {/* Ряд 3: SEO */}
              <div className="py-10 border-b border-white/5 group relative">
                <h3 className="text-2xl md:text-[32px] md:leading-[1.1] font-extrabold text-white mb-8 tracking-tight">SEO-подготовка</h3>
                <div className="grid grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-white/[0.08] group-hover:backdrop-blur-md border border-transparent group-hover:border-white/10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] focus:outline-none">
                    <h4 className="text-lg md:text-xl font-semibold text-white/90 mb-2">Ручная настройка тегов</h4>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">Сайт месяцами «висит» вне поиска.</p>
                  </div>
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-[#F27D26]/[0.22] group-hover:backdrop-blur-xl border border-transparent group-hover:border-[#F27D26]/40 group-hover:shadow-[0_0_60px_rgba(242,125,38,0.25)] focus:outline-none">
                    <div className="hidden md:block absolute -left-8 top-6 bottom-6 w-px bg-white/10 group-hover:opacity-0 transition-opacity duration-200" />
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">AI-SEO Оптимизация.</h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">Авто-генерация семантического ядра и экспертных LSI-текстов. Индексация в 3-5 раз быстрее.</p>
                  </div>
                </div>
              </div>

              {/* Ряд 4: Графика */}
              <div className="py-10 border-b border-white/5 group relative">
                <h3 className="text-2xl md:text-[32px] md:leading-[1.1] font-extrabold text-white mb-8 tracking-tight">Графическое сопровождение</h3>
                <div className="grid grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-white/[0.08] group-hover:backdrop-blur-md border border-transparent group-hover:border-white/10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] focus:outline-none">
                    <h4 className="text-lg md:text-xl font-semibold text-white/90 mb-2">Стоковые фото / Съемка</h4>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">Покупка стоков (от 5$) или организация съемок (от 30к ₽).</p>
                  </div>
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-[#F27D26]/[0.22] group-hover:backdrop-blur-xl border border-transparent group-hover:border-[#F27D26]/40 group-hover:shadow-[0_0_60px_rgba(242,125,38,0.25)] focus:outline-none">
                    <div className="hidden md:block absolute -left-8 top-6 bottom-6 w-px bg-white/10 group-hover:opacity-0 transition-opacity duration-200" />
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">Нейро-продакшн.</h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">Фотореалистичный контент в любом интерьере. Экономия бюджета.</p>
                  </div>
                </div>
              </div>

              {/* Ряд 5: UX */}
              <div className="py-10 border-b border-white/5 group relative">
                <h3 className="text-2xl md:text-[32px] md:leading-[1.1] font-extrabold text-white mb-8 tracking-tight">Пользовательский опыт (UX)</h3>
                <div className="grid grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-white/[0.08] group-hover:backdrop-blur-md border border-transparent group-hover:border-white/10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] focus:outline-none">
                    <h4 className="text-lg md:text-xl font-semibold text-white/90 mb-2">Линейные шаблоны</h4>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">Посетитель не видит отличий от конкурентов.</p>
                  </div>
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-[#F27D26]/[0.22] group-hover:backdrop-blur-xl border border-transparent group-hover:border-[#F27D26]/40 group-hover:shadow-[0_0_60px_rgba(242,125,38,0.25)] focus:outline-none">
                    <div className="hidden md:block absolute -left-8 top-6 bottom-6 w-px bg-white/10 group-hover:opacity-0 transition-opacity duration-200" />
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">Кинематографичный UX.</h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">Плавные анимации на чистом коде, написанные с AI. Повышение глубины просмотра.</p>
                  </div>
                </div>
              </div>

              {/* Ряд 6: Инфраструктура */}
              <div className="py-10 border-b border-white/5 group relative">
                <h3 className="text-2xl md:text-[32px] md:leading-[1.1] font-extrabold text-white mb-8 tracking-tight">Инфраструктура и CRM</h3>
                <div className="grid grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-white/[0.08] group-hover:backdrop-blur-md border border-transparent group-hover:border-white/10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] focus:outline-none">
                    <h4 className="text-lg md:text-xl font-semibold text-white/90 mb-2">Ручная связка</h4>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">Заявки часто теряются или дублируются из-за костылей.</p>
                  </div>
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-[#F27D26]/[0.22] group-hover:backdrop-blur-xl border border-transparent group-hover:border-[#F27D26]/40 group-hover:shadow-[0_0_60px_rgba(242,125,38,0.25)] focus:outline-none">
                    <div className="hidden md:block absolute -left-8 top-6 bottom-6 w-px bg-white/10 group-hover:opacity-0 transition-opacity duration-200" />
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">Бесшовная автоматизация.</h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">AI-коннекторы для моментальной интеграции с CRM и Telegram за 1 вечер.</p>
                  </div>
                </div>
              </div>

              {/* Ряд 7: Стоимость владения */}
              <div className="py-10 border-b border-white/5 group relative">
                <h3 className="text-2xl md:text-[32px] md:leading-[1.1] font-extrabold text-white mb-8 tracking-tight">Стоимость владения</h3>
                <div className="grid grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-white/[0.08] group-hover:backdrop-blur-md border border-transparent group-hover:border-white/10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] focus:outline-none">
                    <h4 className="text-lg md:text-xl font-semibold text-white/90 mb-2">Арендная плата</h4>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">Выплата конструктору (от 6-12к ₽/год) или покупка плагинов.</p>
                  </div>
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-[#F27D26]/[0.22] group-hover:backdrop-blur-xl border border-transparent group-hover:border-[#F27D26]/40 group-hover:shadow-[0_0_60px_rgba(242,125,38,0.25)] focus:outline-none">
                    <div className="hidden md:block absolute -left-8 top-6 bottom-6 w-px bg-white/10 group-hover:opacity-0 transition-opacity duration-200" />
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">0 ₽ за платформу.</h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">Чистый код — ваш актив. Вы не платите «налог» за сторонние сервисы.</p>
                  </div>
                </div>
              </div>

              {/* Ряд 8: Тех. Долг */}
              <div className="py-10 border-b border-white/5 group relative">
                <h3 className="text-2xl md:text-[32px] md:leading-[1.1] font-extrabold text-white mb-8 tracking-tight">Технический долг</h3>
                <div className="grid grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-white/[0.08] group-hover:backdrop-blur-md border border-transparent group-hover:border-white/10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] focus:outline-none">
                    <h4 className="text-lg md:text-xl font-semibold text-white/90 mb-2">Избыточный код</h4>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">Сайт тормозит. Скорость по PageSpeed &lt; 50.</p>
                  </div>
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-200 ease-out group-hover:bg-[#F27D26]/[0.22] group-hover:backdrop-blur-xl border border-transparent group-hover:border-[#F27D26]/40 group-hover:shadow-[0_0_60px_rgba(242,125,38,0.25)] focus:outline-none">
                    <div className="hidden md:block absolute -left-8 top-6 bottom-6 w-px bg-white/10 group-hover:opacity-0 transition-opacity duration-200" />
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center flex-wrap gap-2 md:gap-3">
                      Чистая архитектура.
                      <span className="px-2 py-0.5 rounded-md bg-[#F27D26]/20 text-[#F27D26] text-[10px] md:text-[11px] font-bold group-hover:bg-[#F27D26] group-hover:text-white transition-colors">100 SCORE</span>
                    </h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">95–100 баллов в Google PageSpeed. Идеальная работа на слабых смартфонах.</p>
                  </div>
                </div>
              </div>

              {/* Ряд 9: Аналитика */}
              <div className="py-10 border-b border-white/5 group relative">
                <h3 className="text-2xl md:text-[32px] md:leading-[1.1] font-extrabold text-white mb-8 tracking-tight">Маркетинговая аналитика</h3>
                <div className="grid grid-cols-2 gap-8 md:gap-16 relative">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-white/90 mb-2">Сложные отчеты</h4>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">Требуют расшифровки. Сложно понять, где теряются деньги.</p>
                  </div>
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-500 group-hover:bg-[#F27D26]/[0.08] group-hover:backdrop-blur-xl border border-transparent group-hover:border-[#F27D26]/20 group-hover:shadow-[0_0_40px_rgba(242,125,38,0.05)]">
                    <div className="hidden md:block absolute -left-8 top-6 bottom-6 w-px bg-white/10 group-hover:opacity-0 transition-opacity duration-500" />
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">AI-Аналитика.</h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">Нейросеть находит аномалии и дает рекомендации по росту конверсии.</p>
                  </div>
                </div>
              </div>

              {/* Ряд 10: Масштабируемость */}
              <div className="py-10 group relative">
                <h3 className="text-2xl md:text-[32px] md:leading-[1.1] font-extrabold text-white mb-8 tracking-tight">Масштабируемость</h3>
                <div className="grid grid-cols-2 gap-8 md:gap-16 relative">
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-white/90 mb-2">Потолок платформы</h4>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">Для внедрения личного кабинета нужно переделывать всё.</p>
                  </div>
                  <div className="relative p-6 -my-6 -mx-6 rounded-2xl transition-all duration-500 group-hover:bg-[#F27D26]/[0.08] group-hover:backdrop-blur-xl border border-transparent group-hover:border-[#F27D26]/20 group-hover:shadow-[0_0_40px_rgba(242,125,38,0.05)]">
                    <div className="hidden md:block absolute -left-8 top-6 bottom-6 w-px bg-white/10 group-hover:opacity-0 transition-opacity duration-500" />
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">Модульная система.</h4>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">Готовность к внедрению любой сложности: от простых форм до AI-чат-ботов.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── ПОРТФОЛИО ── */}
        <section id="about" className="pt-32 pb-1 bg-black relative z-10 w-full overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <span className="text-white/40 font-mono text-sm font-bold mb-4 block">04/</span>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[50px] md:text-[80px] font-extrabold tracking-[-0.03em] leading-[1] text-white"
            >
              Портфолио
            </motion.h2>
          </div>

          <div className="w-full flex w-full flex-col md:flex-row gap-[2px]">
            {CASES.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => setActiveCase(c.id)}
                className="group relative flex-1 aspect-square md:aspect-auto md:h-[700px] overflow-hidden cursor-pointer bg-white/5"
              >
                {/* Изображение с эффектом Zoom при наведении */}
                <div className="absolute inset-0 transition-transform duration-[1.5s] ease-out group-hover:scale-110">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80" />
                </div>

                {/* Оверлей-градиент снизу */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Декоративный контур при наведении */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/10 transition-colors duration-500 rounded-2xl pointer-events-none" />

                {/* Контент поверх изображения */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex flex-col items-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                  {/* Категория (появляется) */}
                  <div className="mb-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {c.category}
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-[1.1] tracking-tight text-shadow-sm group-hover:text-[#F27D26] transition-colors duration-300">
                    {c.title}
                  </h3>

                  {/* Статистика и призыв к действию (всплывает снизу) */}
                  <div className="flex items-center justify-between w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 mt-2">
                    <div className="flex items-center gap-2 text-white/80 font-medium">
                      <Heart className="w-5 h-5 text-[#F27D26] fill-current" />
                      <span>{c.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white font-bold group/btn">
                      <span>Смотреть кейс</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 pt-16 pb-10 px-6 mt-20 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-white/30">
          <p>© 2026 Никита Чендев. Сделано с ♥</p>
        </div>
      </footer>

    </div>
  );
}

function CaseStudy({ data, onClose }: { data: any, onClose: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative z-50 animate-in fade-in duration-500 overflow-x-hidden selection:bg-[#3636F5] selection:text-white">

      {/* ── ВЕРХНЯЯ ПАНЕЛЬ НАВИГАЦИИ ── */}
      <div className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 py-6 md:py-8 mix-blend-difference pointer-events-none">
        <button
          onClick={onClose}
          className="text-white hover:text-white/70 transition-colors flex items-center gap-2 font-medium pointer-events-auto cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="hidden md:flex gap-6 text-[11px] uppercase tracking-widest font-bold text-white/50 pointer-events-auto">
          <span className="hover:text-white transition-colors cursor-pointer">Интерьеры</span>
          <span className="hover:text-white transition-colors cursor-pointer">Логотип и шрифт</span>
          <span className="hover:text-white transition-colors cursor-pointer">Аудитория</span>
        </div>
        <div className="w-20" /> {/* Spacer */}
      </div>

      {/* ── ПЛАВАЮЩИЕ ИКОНКИ СПРАВА ── */}
      <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-[60] mix-blend-difference pointer-events-none">
        <div className="flex flex-col items-center gap-2 group cursor-pointer pointer-events-auto">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 rounded-full hover:border-[#3636F5] hover:text-[#3636F5] transition-all duration-300 group-hover:bg-[#3636F5]/10 group-hover:scale-110">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-[#3636F5] fill-current" />
          </div>
          <span className="text-[11px] font-bold text-[#3636F5]">{data.likes}</span>
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 rounded-full hover:border-white transition-all duration-300 cursor-pointer hover:bg-white/10 pointer-events-auto hover:scale-110">
          <Share className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/20 rounded-full hover:border-white transition-all duration-300 cursor-pointer hover:bg-white/10 pointer-events-auto hover:scale-110">
          <BarChart2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
      </div>

      {/* ── ОСНОВНОЙ КОНТЕНТ ── */}
      <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-48 pb-16 md:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[44px] md:text-[92px] lg:text-[110px] font-extrabold tracking-[-0.04em] leading-[0.95] text-center mb-16 md:mb-32 max-w-6xl mx-auto text-white"
        >
          {data.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[20px] md:text-[32px] lg:text-[38px] font-medium leading-[1.3] tracking-tight max-w-4xl mb-24 md:mb-32 mx-auto text-white"
        >
          {data.description}
        </motion.p>
      </div>

      {/* ── ШИРОКОЕ ФОТО ── */}
      {data.fullImage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-auto min-h-[50vh] xl:h-[80vh] overflow-hidden bg-white/5"
        >
          <img src={data.fullImage} alt={data.title} className="w-full h-full object-cover" />
        </motion.div>
      )}

      {/* ── ДОП. ТЕКСТ ── */}
      {data.additionalText && (
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-48">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[20px] md:text-[32px] lg:text-[38px] font-medium leading-[1.3] tracking-tight max-w-4xl mx-auto text-white"
          >
            {data.additionalText}
          </motion.p>
        </div>
      )}

      {/* ── ПЛАВАЮЩАЯ КНОПКА ЗАКАЗА ── */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60]">
        <button className="px-8 py-4 md:px-10 md:py-5 bg-[#3636F5] text-white rounded-full font-bold text-[15px] md:text-lg hover:bg-[#2020f0] transition-all duration-300 shadow-[0_10px_40px_rgba(54,54,245,0.4)] hover:scale-105 active:scale-95 cursor-pointer">
          Заказать дизайн...
        </button>
      </div>
    </div>
  )
}
