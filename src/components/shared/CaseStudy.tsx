import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Zap, Globe } from 'lucide-react';


export default function CaseStudy({ data, onClose, onSwitchCase, cases }: { data: any, onClose: () => void, onSwitchCase: (id: number) => void, cases: any[] }) {
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
            {/* ── ШАПКА КЕЙСА ── */}
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

                <div className="max-w-7xl mx-auto px-6 pt-10 pb-10 md:pt-14 md:pb-12 flex flex-col items-center text-center">
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

                    {data.inProgress && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="flex items-center gap-2 mb-6 text-black/50 font-medium text-base md:text-lg"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] shrink-0" />
                            Кейс в процессе — пока{' '}
                            <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-[#F27D26] underline underline-offset-4 hover:opacity-70 transition-opacity">
                                посмотрите на результат
                            </a>
                        </motion.div>
                    )}

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-[18px] md:text-[34px] lg:text-[40px] font-bold leading-[1.1] max-w-5xl text-black mb-10"
                    >
                        {data.description}
                    </motion.p>

                    {data.link && (
                        <motion.a
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.35 }}
                            className="flex items-center gap-4 px-8 py-4 md:px-10 md:py-5 bg-black text-white rounded-full font-bold text-base md:text-lg hover:bg-[#F27D26] transition-all group"
                        >
                            Смотреть проект
                            <Globe className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                        </motion.a>
                    )}
                </div>

                {data.mainVideo && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full mx-auto rounded-none overflow-hidden bg-black/5"
                    >
                        <div className="relative pt-[56.25%] w-full">
                            <iframe
                                src={data.mainVideo}
                                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                                frameBorder="0"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                    </motion.div>
                )}

                {data.mainVideoCaption && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-6 md:mt-8 text-center text-black/50 font-bold text-base md:text-xl px-6"
                    >
                        {data.mainVideoCaption}
                    </motion.div>
                )}
            </div>

            {/* ── СЕКЦИИ КЕЙСА ── */}
            {
                data.sections?.map((section: any, idx: number) => (
                    <div key={idx} className="w-full bg-white">
                        <img
                            src={section.image}
                            alt={section.title}
                            loading="lazy"
                            className="w-full h-auto block"
                        />
                    </div>
                ))
            }

            {/* ── ОТЗЫВ ── */}
            {data.review && (
                <section className="py-16 md:py-32 px-6 bg-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <p className="text-[18px] md:text-[24px] font-medium text-black leading-[1.6] mb-12">
                            «{data.review.text}»
                        </p>
                        <div className="flex items-center gap-5 border-t border-black/10 pt-8">
                            {data.review.avatar
                                ? <img src={data.review.avatar} alt={data.review.name} className="w-14 h-14 rounded-full object-cover" />
                                : <div className="w-14 h-14 rounded-full bg-[#F27D26] flex items-center justify-center text-white font-black text-xl shrink-0">{data.review.name[0]}</div>
                            }
                            <div>
                                <div className="text-black font-bold text-xl">{data.review.name}</div>
                                <div className="text-black/40 font-medium text-base">{data.review.role}</div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            )}

            {/* ── БЛОК "ЕЩЁ" ── */}
            <section className="py-24 px-6 bg-[#f8f8f8] mb-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-[40px] md:text-[60px] font-extrabold text-black mb-16 text-center">Ещё</h2>
                    <div className="flex flex-wrap justify-center gap-[5px] md:gap-[10px]">
                        {cases.filter(c => c.id !== data.id).map((c) => (
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

        </div >
    );
}
