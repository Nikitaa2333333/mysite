import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Brain, Target, ShieldCheck, Play } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
};

export default function ProjectorLand() {
    useEffect(() => {
        document.title = "Смысловой прожектор";
    }, []);
    return (
        <div className="min-h-screen bg-[#05010d] text-white selection:bg-[#4f46e5] selection:text-white overflow-x-hidden">

            {/* ── BACKGROUND ATMOSPHERE ── */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#4f46e5]/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#7c3aed]/10 blur-[120px] rounded-full"></div>
            </div>

            <main className="relative z-10 font-sans">

                {/* ── HERO SECTION ── */}
                <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="max-w-7xl px-6"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-6xl md:text-8xl lg:text-[140px] font-black leading-[0.9] tracking-tighter mb-12"
                        >
                            Фрилансер! Хватит сливать бюджет на <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] via-[#a78bfa] to-[#c084fc]">пустые отклики.</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-2xl md:text-3xl lg:text-4xl text-white/70 max-w-5xl mx-auto mb-16 font-medium leading-tight"
                        >
                            Смысловой прожектор — твой интерактивный наставник, который подсвечивает истинные боли клиента в тексте заявки. Твой отклик станет единственным, который клиент дочитает до конца.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <button className="px-12 py-6 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white rounded-2xl font-bold text-xl hover:shadow-[0_0_50px_rgba(79,70,229,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group">
                                Установить расширение
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-12 py-6 bg-white/5 border border-white/10 backdrop-blur-xl text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
                                Как это работает?
                            </button>
                        </motion.div>
                    </motion.div>
                </section>

                {/* ── VIDEO SECTION ── */}
                <section className="px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-7xl mx-auto aspect-video rounded-[40px] overflow-hidden border border-white/10 bg-black/40 relative group shadow-[0_0_100px_rgba(79,70,229,0.15)]"
                    >
                        {/* 
                            ИНСТРУКЦИЯ ДЛЯ КИНЕСКОПА:
                            Замени весь блок ниже на iframe от Kinescope.
                        */}
                        <div className="absolute inset-0">
                            <iframe
                                src="https://kinescope.io/embed/hjDcCFw8GdY4sLbmnQmbpW"
                                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                                frameBorder="0"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>

                        {/* Glossy overlay - lightened for performance */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                    </motion.div>
                    <div className="text-center mt-12">
                        <p className="text-white/40 font-mono text-sm tracking-[0.2em] uppercase">Смотреть демо продукта</p>
                    </div>
                </section>

                {/* ── FEATURES / SENSE SECTION ── */}
                <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-3 gap-10">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-10 rounded-[32px] border border-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl flex flex-col gap-6 group hover:border-white/20 transition-all"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[#4f46e5]/20 flex items-center justify-center text-[#818cf8] mb-4">
                            <Brain className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold font-sans">Анализ в реальном времени</h3>
                        <p className="text-white/50 text-lg leading-relaxed">Система мгновенно сканирует текст заказа, выделяя скрытый контекст, который 99% фрилансеров просто пропускают.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="p-10 rounded-[32px] border border-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl flex flex-col gap-6 group hover:border-white/20 transition-all"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[#7c3aed]/20 flex items-center justify-center text-[#a78bfa] mb-4">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold font-sans">«В мире клиента»</h3>
                        <p className="text-white/50 text-lg leading-relaxed">Помогает сформулировать предложение, основанное на реальных задачах заказчика, а не на твоих стандартных шаблонах.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-10 rounded-[32px] border border-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl flex flex-col gap-6 group hover:border-white/20 transition-all"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[#ec4899]/20 flex items-center justify-center text-[#f472b6] mb-4">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold font-sans">Стандарт качества</h3>
                        <p className="text-white/50 text-lg leading-relaxed">Устанавливает новый уровень проффесионализма, делая тебя топовым исполнителем еще до первого созвона.</p>
                    </motion.div>

                </section>

                {/* ── FINAL CTA ── */}
                <section className="py-40 px-6 text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[100%] bg-[#4f46e5]/10 blur-[150px] rounded-full"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-5xl md:text-7xl font-black mb-12">Набор в команду</h2>
                        <button className="px-14 py-8 bg-white text-black rounded-full font-bold text-2xl hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-2xl">
                            Вступить в проект
                        </button>
                    </motion.div>
                </section>

            </main>

            <footer className="py-12 border-t border-white/5 text-center text-white/20 text-sm">
                <p>© 2026 Смысловой прожектор. Проект Никиты Чендева</p>
            </footer>

        </div>
    );
}
