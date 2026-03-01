import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Shield, Globe, Play, Menu, X, Twitter, Github } from 'lucide-react';


const TECH_STACK = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Figma', 'Node.js', 'Framer Motion', 'Vite', 'PostgreSQL', 'GraphQL'];

const staggerContainer = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen relative selection:bg-[#F27D26] selection:text-white">
            <div className="atmosphere" />

            {/* ── НАВИГАЦИЯ ── */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
                <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between">
                    {/* Логотип */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F27D26] to-orange-400 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold tracking-tight text-lg">Nexus</span>
                    </div>

                    {/* Ссылки (ПК) */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                        <a href="#features" className="hover:text-white transition-colors duration-200 cursor-pointer">Услуги</a>
                        <a href="#about" className="hover:text-white transition-colors duration-200 cursor-pointer">Обо мне</a>
                        <a href="#pricing" className="hover:text-white transition-colors duration-200 cursor-pointer">Цены</a>
                    </div>

                    {/* CTA + мобильное переключение */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:block text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 cursor-pointer">
                            Войти
                        </button>
                        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors duration-200 cursor-pointer hover:scale-105 active:scale-95">
                            Начать
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden p-2 cursor-pointer"
                            aria-label="Переключить меню"
                        >
                            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Мобильное меню */}
                {menuOpen && (
                    <div className="mobile-menu md:hidden max-w-7xl mx-auto mt-2 glass-panel-strong rounded-2xl px-6 py-5 flex flex-col gap-4">
                        <a href="#features" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer">Услуги</a>
                        <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer">Обо мне</a>
                        <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer">Цены</a>
                        <hr className="border-white/10" />
                        <button className="w-full bg-white text-black py-2.5 rounded-full text-sm font-medium cursor-pointer hover:bg-white/90 transition-colors">
                            Начать
                        </button>
                    </div>
                )}
            </nav>

            <main>
                {/* ── ГЕРОЙ ── */}
                <section className="pt-40 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center text-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col items-center"
                    >
                        {/* Плашки удалены по просьбе пользователя */}

                        <motion.h1
                            variants={fadeUp}
                            className="text-[36px] md:text-[62px] font-extrabold tracking-tight max-w-5xl mx-auto leading-tight mb-6 md:mb-10"
                        >
                            Я — Никита Чендев. <br className="hidden md:block" />
                            Создаю потрясающие сайты.
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-[18px] md:text-[40px] text-white font-bold max-w-4xl mx-auto mb-8 md:mb-12 tracking-tight md:tracking-[-1.2px] leading-snug md:leading-[1.25]"
                        >
                            Рабочий сайт с&nbsp;нуля всего за&nbsp;2–4 дня. <br className="hidden md:block" />
                            А&nbsp;если нужно&nbsp;— и&nbsp;за&nbsp;1 день!
                        </motion.p>

                        {/* Мини-статистика */}
                        <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-10 text-[10px] md:text-xs text-white/40 font-medium">
                            <span>⚡ 1–4 дня</span>
                            <span className="hidden md:block w-px h-3 bg-white/15" />
                            <span>🎯 47+ проектов</span>
                            <span className="hidden md:block w-px h-3 bg-white/15" />
                            <span>✅ 100% довольных клиентов</span>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className="flex flex-col sm:flex-row items-center gap-4"
                        >
                            <button className="w-full sm:w-auto px-8 py-4 bg-[#F27D26] hover:bg-[#ff8c3a] text-white rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer hover:shadow-[0_0_30px_rgba(242,125,38,0.4)]">
                                Обсудить проект
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-white/10 text-white rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer">
                                <Play className="w-4 h-4" />
                                Посмотреть работы
                            </button>
                        </motion.div>
                    </motion.div>
                </section>

                {/* ── ТЕХНОЛОГИЧЕСКИЙ СТЕК ── */}
                <section className="py-10 border-y border-white/5 overflow-hidden bg-black/20">
                    <div className="marquee-track gap-14 items-center">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-14 items-center shrink-0">
                                {TECH_STACK.map((tech, j) => (
                                    <span key={j} className="text-xs font-semibold tracking-[0.2em] text-white/25 uppercase font-sans whitespace-nowrap">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── ПРЕИМУЩЕСТВА ── */}
                <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
                            Всё, что вам нужно. <br />
                            Ничего лишнего.
                        </h2>
                        <p className="text-white/60 text-lg max-w-xl">
                            Тщательно подобранный набор инструментов, призванный усилить ваш творческий потенциал, не&nbsp;мешая рабочему процессу.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {/* Большая карточка */}
                        <motion.div
                            variants={fadeUp}
                            className="md:col-span-2 glass-panel feature-card rounded-3xl p-8 md:p-12 relative overflow-hidden cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F27D26]/20 rounded-full blur-[80px] -mr-20 -mt-20 transition-opacity group-hover:opacity-100 opacity-60" />
                            <Zap className="w-10 h-10 text-[#F27D26] mb-6" />
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Молниеносная производительность</h3>
                            <p className="text-white/60 max-w-md">
                                Построено на&nbsp;кастомном движке рендеринга, который обрабатывает сложные сцены за&nbsp;миллисекунды. Забудьте об&nbsp;ожиданиях.
                            </p>
                        </motion.div>

                        {/* Квадратная карточка 1 */}
                        <motion.div
                            variants={fadeUp}
                            className="glass-panel feature-card rounded-3xl p-8 relative overflow-hidden cursor-pointer"
                        >
                            <Shield className="w-8 h-8 text-white/80 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Безопасность корпоративного уровня</h3>
                            <p className="text-white/60 text-sm">
                                Шифрование банковского уровня для всех ваших креативных активов. Ваша работа принадлежит только вам.
                            </p>
                        </motion.div>

                        {/* Квадратная карточка 2 */}
                        <motion.div
                            variants={fadeUp}
                            className="glass-panel feature-card rounded-3xl p-8 relative overflow-hidden cursor-pointer"
                        >
                            <Globe className="w-8 h-8 text-white/80 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Глобальное сотрудничество</h3>
                            <p className="text-white/60 text-sm">
                                Работайте со&nbsp;своей командой в&nbsp;режиме реального времени, где&nbsp;бы они ни&nbsp;находились.
                            </p>
                        </motion.div>

                        {/* Широкая карточка */}
                        <motion.div
                            variants={fadeUp}
                            className="md:col-span-2 glass-panel feature-card rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 cursor-pointer"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Готовы трансформировать свой рабочий процесс?</h3>
                                <p className="text-white/60">Присоединяйтесь к&nbsp;тысячам создателей, которые уже используют Nexus.</p>
                            </div>
                            <button className="w-full md:w-auto px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors duration-200 shrink-0 cursor-pointer hover:scale-105 active:scale-95">
                                Начать сейчас
                            </button>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            {/* ── ПОДВАЛ ── */}
            <footer className="border-t border-white/10 pt-16 pb-10 px-6 mt-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
                    {/* Брендинг */}
                    <div className="max-w-xs">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded-full bg-[#F27D26] flex items-center justify-center">
                                <Sparkles className="w-3 h-3 text-white" />
                            </div>
                            <span className="font-semibold tracking-tight text-lg">Nexus</span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed mb-5">
                            Создаю красивые и&nbsp;быстрые сайты для бизнеса и&nbsp;стартапов. Пишите&nbsp;— отвечу быстро.
                        </p>
                        {/* Соцсети */}
                        <div className="flex items-center gap-3">
                            <a href="https://t.me/nikita" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 glass-panel rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-[#F27D26]/30 transition-all duration-200 cursor-pointer">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                            </a>
                            <a href="https://github.com/nikita" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 glass-panel rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-[#F27D26]/30 transition-all duration-200 cursor-pointer">
                                <Github className="w-3.5 h-3.5" />
                            </a>
                            <a href="https://twitter.com/nikita" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 glass-panel rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-[#F27D26]/30 transition-all duration-200 cursor-pointer">
                                <Twitter className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* Ссылки */}
                    <div className="flex gap-16">
                        <div>
                            <h4 className="font-semibold text-sm mb-4">Навигация</h4>
                            <ul className="space-y-3 text-sm text-white/50">
                                <li><a href="#features" className="hover:text-white transition-colors duration-200 cursor-pointer">Услуги</a></li>
                                <li><a href="#about" className="hover:text-white transition-colors duration-200 cursor-pointer">Обо мне</a></li>
                                <li><a href="#pricing" className="hover:text-white transition-colors duration-200 cursor-pointer">Цены</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-sm mb-4">Контакты</h4>
                            <ul className="space-y-3 text-sm text-white/50">
                                <li><a href="https://t.me/nikita" target="_blank" className="hover:text-white transition-colors duration-200 cursor-pointer">Telegram</a></li>
                                <li><a href="mailto:nikita@example.com" className="hover:text-white transition-colors duration-200 cursor-pointer">Email</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-white/30">
                    <p>© 2026 Никита Чендев. Сделано с&nbsp;♥</p>
                    <p className="mt-2 md:mt-0 font-mono">React · Vite · Tailwind</p>
                </div>
            </footer>
        </div>
    );
}
