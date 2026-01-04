"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TogetherTimer() {
    const [timeTogether, setTimeTogether] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Set your start date here!
    const startDate = "2024-01-01";

    useEffect(() => {
        const start = new Date(startDate).getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = now - start;

            setTimeTogether({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 bg-white dark:bg-card relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

            <div className="container px-4 mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-12 text-primary font-serif"
                >
                    Loving You For
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {Object.entries(timeTogether).map(([unit, value], index) => (
                        <motion.div
                            key={unit}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                            className="glass-card p-6 rounded-2xl border border-white/40 shadow-xl backdrop-blur-md bg-white/30 dark:bg-black/30 group"
                        >
                            <div className="text-4xl md:text-6xl font-bold text-primary mb-2 font-mono group-hover:scale-110 transition-transform duration-300">
                                {value}
                            </div>
                            <div className="text-muted-foreground uppercase tracking-widest text-sm font-medium">
                                {unit}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
