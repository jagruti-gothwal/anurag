"use client";

import { motion } from "framer-motion";

export function LoveLetter() {
    return (
        <section className="py-20 bg-secondary/20 relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-3xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-card p-8 md:p-12 rounded-xl shadow-xl border border-pink-100 rotate-1"
                >
                    <div className="font-dancing text-2xl md:text-3xl leading-relaxed text-foreground/80 space-y-6">
                        <p>My Dearest Love,</p>

                        <p>
                            I wanted to take a moment to tell you just how much you mean to me.
                            From the moment you walked into my life, everything became brighter,
                            happier, and so much more beautiful.
                        </p>

                        <p>
                            You are my best friend, my confidant, and my greatest adventure.
                            Every day with you is a gift that I cherish deeply. Your smile is my
                            favorite sight, and your laughter is my favorite sound.
                        </p>

                        <p>
                            Thank you for being you. Thank you for your kindness, your patience,
                            and your endless love. I promise to always be there for you, to support
                            you, and to love you more with each passing day.
                        </p>

                        <p className="text-right mt-8">
                            Forever Yours,<br />
                            <span className="text-primary font-bold">Me</span>
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-10 left-10 text-6xl opacity-10 rotate-12">💌</div>
            <div className="absolute bottom-10 right-10 text-6xl opacity-10 -rotate-12">🌹</div>
        </section>
    );
}
