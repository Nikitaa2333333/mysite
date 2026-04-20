import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Heart, Rocket, MessageSquare, Search, Camera, Play, Database, Shield, BarChart, Layers, Eye } from 'lucide-react';
import myPhoto from '../assets/images/Gemini_Generated_Image_o3wfh7o3wfh7o3wf.webp';
import strawberryCover from '../assets/images/Slide 16_9 - 1.webp';
import uvuCover from '../assets/images/увууу.webp';
import grafitShowcase from '../assets/images/Slide 16_9 - 15.webp';
import aaaaCover from '../assets/images/аааааа.webp';
import klklCover from '../assets/images/клклкл.webp';
import strawberryAdmin from '../assets/images/Slide 16_9 - 18.webp';
import strawberryLogistics from '../assets/images/Slide 16_9 - 19.webp';
import strawberryTelegram from '../assets/images/тггг.webp';
import frame36 from '../assets/images/Frame 36.webp';
import frame37 from '../assets/images/Frame 37.webp';
import zooBestfriend from '../assets/images/zoo-bestfriend.webp';
import bestfriendCover from '../assets/images/bestfriend-cover.webp';
import buuuShowcase from '../assets/images/БУУУ.webp';
import emojitoursCover from '../assets/images/Slide 16_9 - 7.webp';
import emojitoursShowcase from '../assets/images/emojitours-section1.png';
import emojitoursMemo from '../assets/images/Slide 16_9 - 25.webp';
import arharQuartzCover from '../assets/images/arhar-quartz-cover.webp';
import arharQuartzScreen from '../assets/images/arhar-quartz-screen.webp';
import CaseStudy from '../components/shared/CaseStudy';

const TECH_STACK = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Node.js', 'Framer Motion', 'Vite', 'PostgreSQL', 'GraphQL',
    'VEO 3 (Video Generation)', 'VEO 3 (Photo Generation)', 'Sora AI', 'Midjourney v6', 'Claude 4.6', 'Gemini 3.1 Pro',
    'Llama 3.1', 'Runway Gen-3', 'Luma Dream Machine', 'Supabase', 'Docker', 'Webflow', 'Cursor AI', 'Linear', 'Three.js',
    'GSAP', 'Vercel', 'Stripe', 'Python', 'FastAPI', 'Redis', 'Adobe After Effects', 'Cinema 4D', 'Spline 3D'
];

const CASES = [
    // ── 1. Зоотель — на всю ширину ──
    {
        id: 5,
        title: 'Зоотель «БестФренд»',
        category: 'Услуги / Pet-care',
        buildTime: '7 дней',
        likes: 41,
        link: 'https://xn--90agca4bqgis.xn--p1ai/',
        image: bestfriendCover,
        description: 'Онлайн-витрина зоотеля с автоматизацией брони и Telegram-уведомлениями.',
        fullImage: bestfriendCover,
        fullWidthRow: true,
        inProgress: true,
        sections: [
            {
                title: 'Онлайн-бронирование',
                text: 'Клиент выбирает номер, видит что включено, и бронирует за пару кликов — без звонков и мессенджеров.',
                image: zooBestfriend
            }
        ]
    },
    // ── 2. Эмоджи Турс — на всю ширину ──
    {
        id: 4,
        title: 'Эмоджи Турс',
        category: 'Туристическое агентство',
        buildTime: '10 дней',
        likes: 61,
        link: 'https://emojitours.ru/',
        image: emojitoursCover,
        description: 'Масштабная туристическая экосистема: 30+ страниц, 3D-памятки для каждой страны и живой маскот, который провожает тебя в отпуск.',
        fullImage: emojitoursCover,
        fullWidthRow: true,
        review: {
            text: 'Никита очень скромный парень, но с огромным потенциалом! Моя задача была сформирована не особо чётко, так как я сам до конца не понимал, как должен выглядеть проект в конечном счёте. Никита очень быстро задал правильные вопросы, разобрался в задаче и сформировал своё предложение с демонстрацией демо. В итоге полностью обновили проект моего туристического агентства, логотип, создали и интегрировали новые функции и модули. Сайт стал выглядеть современно, функционально и максимально приятно! Очень рад сотрудничеству и буду рад работать дальше с Никитой! Всем очень рекомендую.',
            name: 'Евгений',
            role: 'Основатель Эмоджи Турс',
            avatar: null,
        },
        sections: [
            {
                title: '30+ страниц — каждая живая',
                text: 'Отдельная страница под каждое направление: своя навигация, своя атмосфера, свой ритм. Bento-грид стран, интерактивный календарь туров и умный поиск Tourvisor — всё работает как единый организм без перезагрузок и задержек.',
                image: emojitoursShowcase
            },
            {
                title: 'PDF-памятки путешественника',
                text: 'Для каждой страны — интерактивная памятка с генерацией 3D-визуалов: климат, визовый режим, лучшие месяцы, лайфхаки от местных. Не просто текст — полноценный гид, в котором хочется задержаться.',
                image: emojitoursMemo
            }
        ]
    },
    // ── 3+4. Архар Кварц + Апельсинка — две колонки ──
    {
        id: 6,
        title: 'Архар Кварц',
        category: 'Инвестиции / B2B',
        buildTime: '3 часа',
        likes: 44,
        link: 'https://arhar-quartz.ru/',
        image: arharQuartzCover,
        description: 'Консервативный корпоративный лендинг для привлечения инвесторов: ключевые метрики, цифры и доверие с первого взгляда.',
        fullImage: arharQuartzCover,
        fullWidthRow: false,
        sections: [
            {
                title: 'Инвестор-центричный дизайн',
                text: 'Строгая корпоративная эстетика с акцентом на главных финансовых показателях. Каждый блок — аргумент для инвестора: активы, доходность, история. Никакого шума — только цифры и доверие.',
                image: arharQuartzScreen
            },
            {
                title: 'Экспресс-запуск за 3 часа',
                text: 'От брифа до живого сайта — 3 рабочих часа. Лендинг написан с нуля на чистом коде без шаблонов: 95+ баллов PageSpeed, мгновенная загрузка и полная адаптация под мобильные устройства.',
                image: arharQuartzScreen
            }
        ]
    },
    {
        id: 1,
        title: 'Strawberry Love',
        category: 'E-commerce',
        buildTime: '4 дня',
        likes: 48,
        link: 'https://apelsinkabar.vercel.app/',
        image: strawberryCover,
        description: 'Автономная бизнес-система, которая продает сама и автоматизирует 90% рутины: от витрины до фискальных чеков.',
        mainVideo: 'https://kinescope.io/embed/tGeLSBGuAcoWtLbtvV6bRG',
        mainVideoCaption: 'Никита рассказывает и показывает сайт',
        fullImage: strawberryCover,
        fullWidthRow: false,
        sections: [
            {
                title: 'Визуал, который продает',
                text: 'Сложнейшая анимация из 189 кадров создает эффект присутствия и «живого» продукта при скролле. Дерзкая типографика и чистота интерфейса подчеркивают премиальный статус бренда.',
                image: klklCover
            },
            {
                title: 'Управление без кода',
                text: 'Zero-Code админ-панель позволяет менять контент, цены и остатки на лету. Система Undo/Redo гарантирует безопасность: любая ошибка при редактировании отменяется мгновенно.',
                image: strawberryAdmin
            },
            {
                title: 'Логистика и Маркетинг',
                text: 'Автоматический расчет доставки по зонам через Yandex Maps и идеальный чекаут с серверной проверкой корзины. Система предзаказов со скидкой 10% помогает планировать закупки сырья.',
                image: strawberryLogistics
            },
            {
                title: 'Telegram CRM',
                text: 'Мгновенное уведомление в Telegram: менеджер видит состав заказа, точный адрес и статус оплаты. Автоматизация 90% процессов превращает сайт в автономный бизнес.',
                image: strawberryTelegram
            }
        ]
    },
    // ── 5+6. Легенда + Grafit Lab — две колонки ──
    {
        id: 3,
        title: 'Легенда',
        category: 'Недвижимость',
        buildTime: '2 часа',
        likes: 52,
        link: 'https://legenda1.vercel.app/',
        image: frame36,
        description: 'Высококонверсионный посадочный экран для моментального сбора лидов и роста продаж.',
        fullImage: frame37,
        fullWidthRow: false,
        sections: [
            {
                title: 'Экспресс-запуск',
                text: 'Запуск за 2 рабочих часа от идеи до кода. Архитектура захвата внимания пользователя обеспечивает максимальную конверсию.',
                image: buuuShowcase
            }
        ]
    },
    {
        id: 2,
        title: 'Grafit Lab',
        category: 'B2B Экосистема',
        buildTime: '3 дня',
        likes: 35,
        link: 'https://nikiiii.vercel.app/',
        image: uvuCover,
        description: 'Масштабируемая B2B-платформа для дистрибуции научного оборудования с автоматизацией заявок и базой знаний.',
        mainVideo: 'https://kinescope.io/embed/mVNquTAXmRmomwwmQ4isYD',
        mainVideoCaption: 'Никита рассказывает и показывает экосистему',
        fullImage: uvuCover,
        fullWidthRow: false,
        sections: [
            {
                title: 'Индустриальный UX',
                text: 'Строгая эстетика Scientific Industrial для экспертного бренда. Интеллектуальная навигация и мгновенный предпросмотр PDF-спецификаций без перезагрузки страниц.',
                image: grafitShowcase
            },
            {
                title: 'AI-Генерация знаний',
                text: 'Интеллектуальная система анализирует лучшие мировые исследования и тренды 2025-2026 годов. Все научные открытия и публикации проходят через наш AI-процессинг для быстрой дистрибуции экспертизы.',
                image: aaaaCover
            }
        ]
    }
];

const COMPARISON = [
    {
        label: 'Срок выхода на рынок',
        old: '3–4 недели. Потеря прибыли из-за долгого ожидания запуска.',
        new: '2–4 дня. AI сокращает техническую рутину на 80%.',
        icon: Rocket
    },
    {
        label: 'Работа с контентом',
        old: 'Найм копирайтера. Риск срыва сроков и «воды» в текстах.',
        new: 'AI-Копирайтинг. Генерация смыслов за 15 минут.',
        icon: MessageSquare
    },
    {
        label: 'SEO-подготовка',
        old: 'Базовые теги вручную. Сайт месяцами вне поиска.',
        new: 'AI-SEO. Индексация и рост в 3-5 раз быстрее.',
        icon: Search
    },
    {
        label: 'Графическое сопровождение',
        old: 'Стоковые фото или дорогие съемки (от 30к ₽).',
        new: 'Нейро-продакшн. Фотореалистичный контент товара в любом интерьере.',
        icon: Camera
    },
    {
        label: 'Пользовательский опыт (UX)',
        old: 'Линейные шаблоны. Посетитель не видит отличий.',
        new: 'Кинематографичный UX. Плавные анимации на чистом коде.',
        icon: Play
    },
    {
        label: 'Инфраструктура и CRM',
        old: 'Ручная связка. Заявки часто теряются или дублируются.',
        new: 'Бесшовная автоматизация. Интеграция с CRM и Telegram за 1 вечер.',
        icon: Database
    },
    {
        label: 'Стоимость владения',
        old: 'Арендная плата конструктору (от 6-12к ₽/год).',
        new: '0 ₽ за платформу. Чистый код — это ваш актив.',
        icon: Shield
    },
    {
        label: 'Технический долг',
        old: 'Избыточный код плагинов замедляет сайт (< 50/100).',
        new: 'Чистая архитектура. 95–100 баллов в PageSpeed.',
        icon: Layers
    },
    {
        label: 'Маркетинговая аналитика',
        old: 'Отчеты, требующие расшифровки. Сложно понять потери.',
        new: 'AI-Аналитика. Нейросеть находит аномалии и дает рекомендации.',
        icon: BarChart
    },
    {
        label: 'Масштабируемость',
        old: 'Потолок платформы. Нужно переделывать всё.',
        new: 'Модульная система. Готовность к AI-ботам и ERP любой сложности.',
        icon: Eye
    }
];

const EXTRA_FEATURES = [
    {
        title: 'Анализ конкурентов',
        desc: 'Глубокое исследование рынка и стратегий конкурентов за 15 минут. Автоматизированный поиск слабых мест.',
        icon: BarChart,
        color: 'from-indigo-500/20 to-blue-500/20'
    },
    {
        title: 'Нейро-продакшн',
        desc: 'Создаем фото и видео товара студийного качества без реальных фотосессий.',
        icon: Camera,
        color: 'from-purple-500/20 to-pink-500/20'
    },
    {
        title: 'SEO-Доминирование',
        desc: 'Авто-генерация 1000+ экспертных статей. Захватываем поиск быстро.',
        icon: Search,
        color: 'from-orange-500/20 to-red-500/20'
    },
    {
        title: 'Бесшовная связка',
        desc: 'Интеграция с AmoCRM, Bitrix24 и Telegram за 1 вечер. Всё под контролем.',
        icon: Database,
        color: 'from-green-500/20 to-emerald-500/20'
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

export default function Home() {
    const [activeCase, setActiveCase] = useState<number | null>(null);

    useEffect(() => {
        document.title = "Никита Чендев — Smart Develop";
    }, []);

    const activeCaseData = CASES.find(c => c.id === activeCase);

    if (activeCaseData) {
        return <CaseStudy data={activeCaseData} onClose={() => setActiveCase(null)} onSwitchCase={(id) => setActiveCase(id)} cases={CASES} />;
    }

    return (
        <div className="min-h-screen relative overflow-x-hidden selection:bg-[#F27D26] selection:text-white bg-black">
            <main className="relative z-10 pt-0 text-white">
                {/* ── ГЕРОЙ ── */}
                <section className="relative min-h-screen flex flex-col md:flex-row items-stretch w-full overflow-hidden">
                    <div className="w-full md:w-[52%] flex items-center justify-center z-20 pt-8 pb-10 md:py-0 overflow-hidden order-2 md:order-1 -mt-6 md:mt-0 relative">
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
                                className="text-[clamp(40px,5vw,82px)] font-extrabold leading-[0.9] mb-16 pb-2"
                            >
                                <span className="opacity-90">Я — Никита Чендев.</span> <br className="hidden lg:block" />
                                Создаю сайты <span className="text-[#F27D26] drop-shadow-[0_0_30px_rgba(242,125,38,0.5)]">будущего</span>
                            </motion.h1>

                            <motion.div
                                variants={fadeUp}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-14 w-full"
                            >
                                <div className="flex flex-col">
                                    <span className="text-[clamp(40px,5vw,82px)] font-extrabold text-[#F27D26] leading-[0.9]">3x</span>
                                    <span className="text-[18px] md:text-[24px] font-medium leading-[1.1] text-white">дешевле</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[clamp(40px,5vw,82px)] font-extrabold text-[#F27D26] leading-[0.9]">10x</span>
                                    <span className="text-[18px] md:text-[24px] font-medium leading-[1.1] text-white">быстрее</span>
                                </div>
                                <div className="flex flex-col justify-end pb-1 md:pb-2">
                                    <div className="flex flex-col">
                                        <span className="text-[clamp(28px,3vw,36px)] font-extrabold text-white leading-[0.9] mb-1">студийное</span>
                                        <span className="text-[18px] md:text-[24px] font-medium leading-[1.1] text-white">качество</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 relative z-20 w-full sm:w-auto">
                                <a href="#contact" className="glow-button px-10 py-5 bg-[#F27D26] text-white rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(242,125,38,0.3)] flex items-center justify-center gap-2">
                                    Запустить проект
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a href="#portfolio" className="px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-xl text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all flex justify-center items-center cursor-pointer">
                                    Смотреть кейсы
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full md:w-[48%] h-[55vh] md:h-auto md:min-h-screen relative md:sticky md:top-0 right-0 overflow-hidden z-10 flex flex-col justify-end order-1 md:order-2 bg-[#111]"
                    >
                        <div className="relative w-full h-full group">
                            <img
                                src={myPhoto}
                                alt="Никита Чендев"
                                loading="eager"
                                className="w-full h-full object-cover object-top md:object-center transition-transform duration-[2s] ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black via-black/70 to-transparent md:hidden"></div>
                            <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-black/40 pointer-events-none"></div>
                            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
                        </div>
                    </motion.div>
                </section>

                {/* ── БЛОК 01 ── */}
                <section className="bg-[#F27D26] py-32 md:py-48 px-6 relative z-10 w-full overflow-hidden">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
                        <div className="md:col-span-1">
                            <span className="text-white/40 font-mono text-sm font-bold">01/</span>
                        </div>
                        <div className="md:col-span-11 xl:col-span-10">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h2 className="text-[clamp(40px,7vw,82px)] font-extrabold leading-[0.9] text-white mb-10">
                                    Покажу первую <br className="hidden md:block" />
                                    рабочую версию <br className="hidden md:block" />
                                    сайта уже сегодня <br className="hidden md:block" />
                                    — бесплатно.
                                </h2>

                                <div className="max-w-2xl">
                                    <p className="text-[20px] md:text-[28px] font-medium leading-[1.1] text-white mb-6">
                                        Без обязательств: если не понравится — то ок, если понравится — работаем!
                                    </p>
                                    <p className="text-[20px] md:text-[28px] font-medium leading-[1.1] text-white mb-14">
                                        Рабочая версия будет выложена на хостинг, ей можно сразу пользоваться, показывать клиентам. Это полная адаптированная версия сайта с вашей идеей.
                                    </p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <a href="#contact" className="group relative w-fit flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all duration-300">
                                        Начать работу
                                        <div className="w-8 h-8 rounded-full bg-black/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── ПОРТФОЛИО ── */}
                <section id="portfolio" className="pt-32 pb-1 bg-black relative z-10 w-full overflow-hidden border-t border-white/5">
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
                        {CASES.map((c) => (
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
                                <div className="absolute inset-0 transition-transform duration-[1.5s] ease-out group-hover:scale-110 will-change-transform">
                                    <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80" />
                                </div>

                                {c.buildTime && (
                                    <div className="absolute top-8 right-8 z-30 px-8 py-4 bg-[#F27D26] rounded-full text-[16px] md:text-xl font-black text-white shadow-[0_15px_35px_rgba(242,125,38,0.5)] flex items-center gap-3 transform rotate-[-1.5deg] hover:rotate-0 transition-all duration-300">
                                        <Zap className="w-6 h-6 md:w-7 md:h-7 fill-current" />
                                        {c.buildTime}
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                                <div className="absolute inset-x-6 bottom-12 md:inset-x-12 md:bottom-12 flex flex-col items-center text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <div className="mb-4 flex flex-wrap items-center justify-center gap-2 md:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <div className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[12px] md:text-sm font-bold text-white/90">
                                            {c.category}
                                        </div>
                                    </div>

                                    <h3 className="text-[32px] md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.1] group-hover:text-[#F27D26] transition-colors duration-300">
                                        {c.title}
                                    </h3>

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

                {/* ── ВПЕЧАТЛЕНИЯ ОТ РАБОТЫ (ВИДЕО) ── */}
                <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        {/* Левая колонка - Видео */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-4 flex justify-center lg:justify-start"
                        >
                            <div className="relative w-full max-w-[350px] aspect-[9/16] rounded-[32px] overflow-hidden border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(242,125,38,0.15)] group">
                                <div className="absolute inset-0 bg-[#F27D26]/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                <div className="absolute inset-0 z-10">
                                    {/* Видео Kinescope */}
                                    <div style={{ position: "relative", paddingTop: "177.78%", width: "100%" }}>
                                        <iframe
                                            src="https://kinescope.io/embed/8nuw4F8VU2TGkNBXEu5VHd"
                                            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                                            frameBorder="0"
                                            allowFullScreen
                                            loading="lazy"
                                            style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }}
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Правая колонка - Текст */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-8 flex flex-col items-start relative"
                        >
                            <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.1] text-white mb-10 relative z-10">
                                «Благодаря скорости разработки удалось выйти на встречу с <span className="text-[#F27D26]">инвесторами через неделю</span>»
                            </h2>

                            <div className="flex flex-col md:flex-row gap-6 md:items-center w-full bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md relative z-10">
                                <div className="flex-1 space-y-2">
                                    <div className="text-2xl font-bold text-white">Иса Исаев</div>
                                    <div className="text-white/60 font-medium">Основатель проекта Grafit Lab</div>
                                </div>

                                <a href="https://nikiiii.vercel.app/" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all duration-300 font-bold shrink-0">
                                    Перейти на сайт
                                    <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-black/10 flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                        <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
                                    </div>
                                </a>
                            </div>

                            <div className="mt-10 text-[18px] md:text-xl text-white/50 leading-relaxed font-medium relative z-10">
                                Никита разработал полноценный прототип всего за несколько дней. Это позволило нам подготовить презентацию для инвесторов в рекордные сроки. Качество кода и дизайна превзошло наши ожидания.
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── ОТЗЫВ ЕВГЕНИЙ ── */}
                <section className="pt-0 pb-16 md:pb-24 px-6 max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 backdrop-blur-md"
                    >
                        <p className="text-[18px] md:text-[26px] font-medium text-white leading-[1.5] mb-10">
                            Никита очень скромный парень, но с огромным потенциалом! Моя задача была сформирована не особо чётко, так как я сам до конца не понимал, как должен выглядеть проект в конечном счёте. Никита очень быстро задал правильные вопросы, разобрался в задаче и сформировал своё предложение с демонстрацией демо. В итоге полностью обновили проект моего туристического агентства, логотип, создали и интегрировали новые функции и модули. Сайт стал выглядеть современно, функционально и максимально приятно! Очень рад сотрудничеству и буду рад работать дальше с Никитой! Всем очень рекомендую.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 md:items-center w-full">
                            <div className="flex items-center gap-4 flex-1">
                                <div className="w-12 h-12 rounded-full bg-[#F27D26]/20 border border-[#F27D26]/40 flex items-center justify-center text-[#F27D26] font-black text-xl">Е</div>
                                <div>
                                    <div className="text-white font-bold text-lg">Евгений</div>
                                    <div className="text-white/40 font-medium text-sm">Основатель Эмоджи Турс</div>
                                </div>
                            </div>
                            <a href="https://emojitours.ru/" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all duration-300 font-bold shrink-0">
                                Перейти на сайт
                                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                                    <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </section>

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

                            <p className="text-[19px] md:text-[28px] text-white leading-relaxed font-medium">
                                В итоге вы получаете сайт с полного нуля, с внедрением всех интеграций и настройкой SEO всего за 2–4 дня. То, что раньше требовало штата целой команды, теперь автоматизировано благодаря Smart Develop.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-10 border-b border-white/5 overflow-hidden bg-black">
                    <div className="marquee-track flex gap-20 items-center">
                        <div className="flex gap-20 items-center shrink-0 animate-marquee">
                            {TECH_STACK.concat(TECH_STACK).map((tech, j) => (
                                <span key={j} className="text-[14px] md:text-lg font-bold text-white/20 uppercase font-sans whitespace-nowrap flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#F27D26]/40" />
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── ЧТО ЕЩЕ МЫ МОЖЕМ (ПЛАШКИ) ── */}
                <section className="bg-black pt-32 pb-0 relative z-10 w-full overflow-hidden border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <span className="text-white/40 font-mono text-sm font-bold mb-4 block">03/</span>
                            <h2 className="text-[40px] md:text-[64px] font-extrabold leading-[1.2] text-white">
                                Возможности <br />
                                без границ
                            </h2>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap gap-0 md:gap-[2px] bg-white/5">
                        {EXTRA_FEATURES.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`group relative p-8 md:p-12 min-h-[350px] flex flex-col justify-between overflow-hidden bg-black transition-all hover:bg-white/[0.02] ${EXTRA_FEATURES.length % 2 !== 0 && i === EXTRA_FEATURES.length - 1
                                    ? 'w-full'
                                    : 'w-full md:w-[calc(50%-1px)] xl:w-[calc(25%-1.5px)] flex-auto'
                                    }`}
                            >
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${feature.color} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#F27D26]/50 group-hover:bg-[#F27D26]/10 transition-all duration-500">
                                        <feature.icon className="w-7 h-7 text-[#F27D26]" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#F27D26] transition-colors">{feature.title}</h3>
                                    <p className="text-white/50 text-lg leading-relaxed max-w-sm group-hover:text-white/80 transition-colors">{feature.desc}</p>
                                </div>

                                <div className="relative z-10 mt-8"></div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── СРАВНЕНИЕ (ТАБЛИЦА) ── */}
                <section id="features" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10 w-full overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 md:mb-24"
                    >
                        <span className="text-white/40 font-mono text-sm font-bold mb-4 block">04/</span>
                        <h2 className="text-[40px] md:text-[64px] font-extrabold leading-[1.2] text-white">
                            Почему Smart Develop <br />
                            круче?
                        </h2>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-2 gap-8 md:gap-16 border-b border-white/20 pb-8 mb-4">
                            <div className="text-white/40 font-bold tracking-tight text-sm md:text-base">Традиционный подход</div>
                            <div className="text-[#F27D26] font-bold tracking-tight text-sm md:text-base">Smart Develop</div>
                        </div>

                        <div className="divide-y divide-white/10">
                            {COMPARISON.map((row, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="py-12 group"
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 group-hover:text-[#F27D26] transition-colors duration-500">
                                        {row.label}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-8 md:gap-16">
                                        <div className="text-white/40 text-sm md:text-lg leading-relaxed font-medium">
                                            {row.old}
                                        </div>
                                        <div className="text-white/90 text-sm md:text-lg leading-relaxed font-medium">
                                            {row.new}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── КОНТАКТЫ ── */}
                <section id="contact" className="bg-black py-40 px-4 md:px-6 relative z-50 w-full overflow-visible">
                    <div className="relative max-w-7xl mx-auto">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F27D26] blur-[120px] md:blur-[220px] opacity-40 pointer-events-none z-0"></div>
                        <div className="relative z-10 bg-[#F27D26] rounded-[40px] md:rounded-[100px] py-16 px-4 md:py-28 md:px-20 flex flex-col items-center justify-center text-center shadow-[0_40px_100px_rgba(242,125,38,0.4)]">
                            <h2 className="text-[28px] sm:text-[40px] md:text-[60px] lg:text-[76px] font-extrabold leading-[0.9] text-white mb-10 md:mb-14 max-w-5xl tracking-tight">
                                Пишите, сделаем<br /> крутой сайт и супер<br /> автоматизацию бизнеса
                            </h2>
                            <a href="https://t.me/chendev1" target="_blank" rel="noopener noreferrer" className="px-10 py-6 md:px-14 md:py-8 bg-black text-white rounded-full font-bold text-xl md:text-[24px] hover:bg-[#1a1a1a] transition-all hover:scale-110 active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                                Написать в Telegram
                            </a>
                        </div>
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


