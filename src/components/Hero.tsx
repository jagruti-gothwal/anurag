"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-pink-100 via-white to-pink-50 dark:from-pink-950 dark:to-background">
            {/* Floating Cute Elements Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            y: "110vh",
                            x: Math.random() * 100 + "vw",
                            rotate: 0,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            y: "-10vh",
                            x: `calc(${Math.random() * 100}vw + ${Math.random() * 100 - 50}px)`,
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: Math.random() * 15 + 15,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "linear",
                        }}
                        className="absolute text-2xl md:text-4xl"
                    >
                        {["❤️", "💖", "🧸", "✨", "🌸", "🎀", "💌"][i % 7]}
                    </motion.div>
                ))}
            </div>

            <div className="container px-4 text-center z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="mb-6 inline-block relative"
                >
                    <div className="absolute inset-0 bg-pink-300 blur-2xl opacity-50 rounded-full animate-pulse" />
                    <span className="text-8xl md:text-9xl relative z-10 drop-shadow-lg filter">
                        🧸
                    </span>
                    <motion.div
                        className="absolute -top-4 -right-4"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <Heart className="w-12 h-12 text-red-500 fill-red-500 drop-shadow-md" />
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold mb-6 tracking-tight font-serif text-primary drop-shadow-sm"
                >
                    I Love You!
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl shadow-xl max-w-2xl mx-auto border-2 border-white"
                >
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                        You are my favorite person in the whole wide world. <br />
                        Missing you lots and lots! 🥺💕
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="mt-10"
                >
                    <a
                        href="#memories"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-primary rounded-full hover:bg-primary/90 hover:scale-110 shadow-xl hover:shadow-pink-400/50 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            See Our Memories <Sparkles className="w-5 h-5" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
