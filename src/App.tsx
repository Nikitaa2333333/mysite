import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Shield, Globe, Play, Menu, X, Twitter, Github, ArrowLeft, Heart, Share, BarChart2 } from 'lucide-react';
import myPhoto from '../Gemini_Generated_Image_o3wfh7o3wfh7o3wf.webp';
import strawberryCover from '../Slide 16_9 - 1.webp';

const TECH_STACK = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Figma', 'Node.js', 'Framer Motion', 'Vite', 'PostgreSQL', 'GraphQL'];

const CASES = [
  {
    id: 1,
    title: 'Strawberry Love',
    category: 'E-commerce',
    buildTime: '4 дня',
    likes: 48,
    link: 'https://strawberry-love.ru',
    image: strawberryCover,
    description: 'Автономная бизнес-система, которая продает сама и автоматизирует 90% рутины: от витрины до фискальных чеков.',
    fullImage: strawberryCover,
    fullWidthRow: true,
    sections: [
      {
        title: 'Визуал, который продает',
        text: 'Сложнейшая анимация из 189 кадров создает эффект присутствия и «живого» продукта при скролле. Дерзкая типографика и чистота интерфейса подчеркивают премиальный статус бренда.',
        image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1600&auto=format&fit=crop'
      },
      {
        title: 'Управление без кода',
        text: 'Zero-Code админ-панель позволяет менять контент, цены и остатки на лету. Система Undo/Redo гарантирует безопасность: любая ошибка при редактировании отменяется мгновенно.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop'
      },
      {
        title: 'Логистика и Маркетинг',
        text: 'Автоматический расчет доставки по зонам через Yandex Maps и идеальный чекаут с серверной проверкой корзины. Система предзаказов со скидкой 10% помогает планировать закупки сырья.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop'
      },
      {
        title: 'Enterprise Финтех',
        text: 'Полная интеграция с ЮKassa и автоматическая фискализация по 54-ФЗ. Принцип идемпотентности и серверная верификация цен исключают двойные списания и ошибки.',
        image: 'https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=1600&auto=format&fit=crop'
      },
      {
        title: 'Telegram CRM',
        text: 'Мгновенное уведомление в Telegram: менеджер видит состав заказа, точный адрес и статус оплаты. Автоматизация 90% процессов превращает сайт в автономный бизнес.',
        image: 'https://images.unsplash.com/photo-1512428559083-a401c3f82b74?q=80&w=1600&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 2,
    title: 'Grafit Lab',
    category: 'B2B Экосистема',
    buildTime: '3 дня',
    likes: 35,
    link: 'https://grafit-lab.com',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop',
    description: 'Масштабируемая B2B-платформа для дистрибуции научного оборудования с автоматизацией заявок и базой знаний.',
    fullImage: 'https://images.unsplash.com/photo-1532187878403-1248a338bd3f?q=80&w=1600&auto=format&fit=crop',
    fullWidthRow: false,
    sections: [
      {
        title: 'Индустриальный UX',
        text: 'Строгая эстетика Scientific Industrial для экспертного бренда. Интеллектуальная навигация и мгновенный предпросмотр PDF-спецификаций без перезагрузки страниц.',
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1600&auto=format&fit=crop'
      },
      {
        title: 'Технологии и Sync',
        text: 'Отказоустойчивая архитектура на базе Supabase и Telegram CRM. Динамический серверный расчет стоимости гарантирует точность и защиту данных.',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1600&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 3,
    title: 'Легенда',
    category: 'Недвижимость',
    buildTime: '6 часов',
    likes: 52,
    link: 'https://legenda.ru',
    image: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?q=80&w=800&auto=format&fit=crop',
    description: 'Высококонверсионный посадочный экран для моментального сбора лидов и роста продаж.',
    fullImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop',
    fullWidthRow: false,
    sections: [
      {
        title: 'Экспресс-запуск',
        text: 'Запуск за 6 рабочих часов от идеи до кода. Архитектура захвата внимания пользователя обеспечивает максимальную конверсию.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop'
      }
    ]
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
    return <CaseStudy data={activeCaseData} onClose={() => setActiveCase(null)} onSwitchCase={(id) => setActiveCase(id)} />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-[#F27D26] selection:text-white bg-black">
      {/* Убрана atmosphere для чистоты черного фона */}


      <main className="relative z-10 pt-0 text-white">
        {/* ── ГЕРОЙ ── */}
        <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-stretch w-full overflow-hidden">
          {/* Свечения убраны по просьбе пользователя для 'максимально черного' фона */}

          {/* LEFT SIDE: TEXT CONTENT (52% on desktop) */}
          <div className="w-full md:w-[52%] flex items-center justify-center z-20 pt-32 pb-16 md:py-0 overflow-hidden">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="max-w-5xl px-6 md:px-12 lg:px-24 w-full flex flex-col items-start text-left"
            >
              <motion.div
                variants={fadeUp}
                className="mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[12px] md:text-[14px] font-bold uppercase text-white/60 shadow-[0_0_20px_rgba(255,255,255,0.03)]"
              >
                Smart Develop & Design
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-[40px] md:text-[60px] lg:text-[82px] font-extrabold leading-[1.2] mb-8 pb-2"
              >
                <span className="opacity-90">Я — Никита Чендев.</span> <br className="hidden lg:block" />
                Создаю сайты <span className="text-[#F27D26] drop-shadow-[0_0_30px_rgba(242,125,38,0.5)]">будущего</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-[16px] md:text-[18px] lg:text-[20px] text-white/50 max-w-xl mb-12 font-medium leading-[1.6]"
              >
                Автоматизированная разработка со скоростью звука. <br className="hidden md:block" />
                Результат, который вы получите уже завтра.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 relative z-20 w-full sm:w-auto">
                <button className="glow-button px-10 py-5 bg-[#F27D26] text-white rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(242,125,38,0.3)] flex items-center justify-center gap-2">
                  Запустить проект
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-xl text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all flex justify-center items-center cursor-pointer">
                  Смотреть кейсы
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: IMAGE (48% on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-[48%] h-[60vh] md:h-screen sticky top-0 right-0 overflow-hidden z-10"
          >
            <div className="relative w-full h-full group">
              <img
                src={myPhoto}
                alt="Никита Чендев"
                className="w-full h-full object-cover object-top transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              {/* Идеальный черный градиент снизу для слияния с фоном */}
              <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black via-black/80 to-transparent md:hidden"></div>
              {/* Глубокий градиент на ПК для премиальности */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-black/40 pointer-events-none"></div>
              {/* Легкое свечение на границе разделения */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
            </div>
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
                <h2 className="text-[40px] md:text-[82px] font-extrabold leading-[1.2] text-white mb-16">
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

        {/* ── ПОРТФОЛИО (БЛОК 02) ── */}
        <section id="about" className="pt-32 pb-1 bg-black relative z-10 w-full overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <span className="text-white/40 font-mono text-sm font-bold mb-4 block">02/</span>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[50px] md:text-[80px] font-extrabold leading-[1.2] text-white"
            >
              Портфолио
            </motion.h2>
          </div>

          <div className="w-full flex flex-wrap gap-0 md:gap-[2px]">
            {CASES.slice(0, 4).map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => setActiveCase(c.id)}
                className={`group relative h-[75vh] md:h-[700px] overflow-hidden cursor-pointer bg-white/5 ${c.fullWidthRow ? 'w-full' : 'flex-auto min-w-full md:min-w-0 md:w-[calc(50%-1px)]'
                  }`}
              >
                {/* Изображение с эффектом Zoom при наведении */}
                <div className="absolute inset-0 transition-transform duration-[1.5s] ease-out group-hover:scale-110 will-change-transform">
                  <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80" />
                </div>

                {/* Постоянная плашка со сроком (вверху справа) — Сделал Крупнее и 100% скругление */}
                {c.buildTime && (
                  <div className="absolute top-8 right-8 z-30 px-8 py-4 bg-[#F27D26] rounded-full text-[16px] md:text-xl font-black text-white shadow-[0_15px_35px_rgba(242,125,38,0.5)] flex items-center gap-3 transform rotate-[-1.5deg] hover:rotate-0 transition-all duration-300">
                    <Zap className="w-6 h-6 md:w-7 md:h-7 fill-current" />
                    {c.buildTime}
                  </div>
                )}

                {/* Оверлей-градиент снизу */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Контент поверх изображения */}
                <div className="absolute inset-x-6 bottom-12 md:inset-x-12 md:bottom-12 flex flex-col items-center text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                  {/* Бейджи: Категория (без капса) */}
                  <div className="mb-4 flex flex-wrap items-center justify-center gap-2 md:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[12px] md:text-sm font-bold text-white/90">
                      {c.category}
                    </div>
                  </div>

                  {/* Заголовок */}
                  <h3 className="text-[32px] md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.1] group-hover:text-[#F27D26] transition-colors duration-300">
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

        {/* ── БЛОК: SMART DEVELOP STATEMENT ── */}
        <section className="bg-black py-20 md:py-32 px-6 relative z-10 w-full overflow-hidden border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col items-start text-left relative z-10">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[42px] md:text-[88px] font-extrabold leading-[1.2] mb-12 text-white"
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
                <span key={j} className="text-xs font-semibold text-white/20 uppercase font-sans whitespace-nowrap">
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
              <h2 className="text-[40px] md:text-[64px] font-extrabold leading-[1.2] text-white">
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

      </main>

      {/* ── БЛОК: СДЕЛАЕМ КРУТОЙ ПРОДУКТ (НА ГЛАВНОЙ) ── */}
      <section className="bg-black py-20 px-4 md:px-6 relative z-10 w-full overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* Мягкое свечение (размытый круг под плашкой) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] h-[80%] md:h-[60%] bg-[#F27D26] blur-[100px] md:blur-[160px] opacity-70 pointer-events-none"></div>

          <div className="relative bg-[#F27D26] rounded-[40px] md:rounded-[100px] py-16 px-4 md:py-28 md:px-20 flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(242,125,38,0.1)]">
            <h2 className="text-[28px] sm:text-[40px] md:text-[60px] lg:text-[76px] font-extrabold leading-[1.05] text-white mb-10 md:mb-14 max-w-5xl tracking-tight">
              Пишите, сделаем<br /> крутой сайт и супер<br /> автоматизацию бизнеса
            </h2>

            <a
              href="https://t.me/nikita_chendev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-6 md:px-14 md:py-8 bg-black text-white rounded-full font-bold text-xl md:text-[24px] hover:bg-[#1a1a1a] hover:scale-105 active:scale-95 transition-all text-center shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 pt-16 pb-10 px-6 mt-20 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-white/30">
          <p>© 2026 Никита Чендев. Сделано с ♥</p>
        </div>
      </footer>

    </div>
  );
}

function CaseStudy({ data, onClose, onSwitchCase }: { data: any, onClose: () => void, onSwitchCase: (id: number) => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.id]);

  return (
    <div className="min-h-screen bg-white text-black relative z-50 animate-in fade-in duration-500 overflow-x-hidden selection:bg-[#F27D26] selection:text-white">

      {/* ── ВЕРХНЯЯ ПАНЕЛЬ НАВИГАЦИИ ── */}
      <div className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-12 py-6 md:py-8 pointer-events-none">
        <button
          onClick={onClose}
          className="text-black hover:text-[#F27D26] transition-all flex items-center gap-3 font-bold pointer-events-auto cursor-pointer group bg-white/80 backdrop-blur-xl px-6 py-3 rounded-full shadow-sm border border-black/5 hover:bg-white"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg">Назад</span>
        </button>
      </div>
      {/* ── ШАПКА КЕЙСА (ФОТО ПЕРВЫМ) ── */}
      <div className="w-full">
        {data.fullImage && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-[60vh] md:h-[90vh] overflow-hidden"
          >
            <img src={data.fullImage} alt={data.title} className="w-full h-full object-cover" />
          </motion.div>
        )}

        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          {data.buildTime && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 px-6 py-3 bg-[#F27D26] rounded-full text-white font-black flex items-center gap-2 shadow-[0_15px_40px_rgba(242,125,38,0.4)]"
            >
              <Zap className="w-5 h-5 md:w-6 md:h-6 fill-current" />
              <span className="text-lg md:text-xl">{data.buildTime}</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[40px] md:text-[80px] lg:text-[100px] font-extrabold leading-[0.9] mb-8 text-black"
          >
            {data.title}
          </motion.h1>

          {data.link && (
            <motion.a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4 px-8 py-4 md:px-10 md:py-5 bg-black text-white rounded-full font-bold text-base md:text-lg hover:bg-[#F27D26] transition-all group scale-100 md:scale-110 mb-12"
            >
              Смотреть проект
              <Globe className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
            </motion.a>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[18px] md:text-[34px] lg:text-[40px] font-bold leading-[1.0] max-w-5xl text-black"
          >
            {data.description}
          </motion.p>
        </div>
      </div>

      {/* ── СЕКЦИИ КЕЙСА ── */}
      {
        data.sections?.map((section: any, idx: number) => (
          <section key={idx} className="w-full border-t border-black/5 bg-white flex flex-col pt-16 md:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              {/* Текст секции (сверху, ближе к картинке, к которой он относится) */}
              <div className="max-w-7xl mx-auto px-6 pb-12 md:pb-20 flex flex-col items-center text-center w-full gap-6 md:gap-10">
                <div className="flex flex-col items-center w-full max-w-4xl">
                  <h2 className="text-[32px] md:text-[76px] lg:text-[92px] font-extrabold text-black leading-[0.9] mb-6 md:mb-10">
                    {section.title}
                  </h2>
                  {section.text && (
                    <p className="text-[18px] md:text-[36px] font-bold text-black/80 leading-[1.2]">
                      {section.text}
                    </p>
                  )}
                </div>
              </div>

              {/* Картинка секции (Крупно, под текстом) */}
              <div className="w-full h-[50vh] md:h-[90vh] overflow-hidden bg-[#f5f5f5]">
                <img src={section.image} alt={section.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </section>
        ))
      }

      {/* ── БЛОК "ЕЩЁ" ── */}
      <section className="py-24 px-6 border-t border-black/5 bg-[#f8f8f8] mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[40px] md:text-[60px] font-extrabold text-black mb-16 text-center">Ещё</h2>
          <div className="flex flex-wrap justify-center gap-[5px] md:gap-[10px]">
            {CASES.filter(c => c.id !== data.id).map((c) => (
              <motion.div
                key={c.id}
                onClick={() => onSwitchCase(c.id)}
                className="group relative aspect-square md:aspect-video md:h-[500px] overflow-hidden cursor-pointer bg-white flex-auto w-full md:min-w-[400px]"
              >
                <div className="absolute inset-0 transition-transform duration-[1.5s] ease-out group-hover:scale-110">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-2 group-hover:translate-y-0 transition-transform text-center p-6">
                  <span className="text-white/80 text-sm md:text-base font-bold uppercase mb-4 tracking-widest">{c.category}</span>
                  <h3 className="text-4xl md:text-6xl font-black text-white">{c.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПЛАВАЮЩАЯ КНОПКА ЗАКАЗА ── */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60]">
        <button className="px-8 py-4 md:px-10 md:py-5 bg-[#F27D26] text-white rounded-full font-bold text-[15px] md:text-lg hover:bg-[#d56d20] transition-all duration-300 shadow-[0_10px_40px_rgba(242,125,38,0.4)] hover:scale-105 active:scale-95 cursor-pointer">
          Запустить проект
        </button>
      </div>
    </div >
  );
}
