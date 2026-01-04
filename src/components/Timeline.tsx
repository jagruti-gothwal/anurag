"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const milestones = [
    {
        date: "The Beginning",
        title: "First Met You",
        description: "The day my life changed forever. I knew there was something special about you.",
        image: "/IMG_0048.JPG",
    },
    {
        date: "First Date",
        title: "Magic in the Air",
        description: "Butterflies in my stomach and a smile I couldn't wipe off my face.",
        image: "/IMG_0138.JPG",
    },
    {
        date: "Adventures",
        title: "Exploring Together",
        description: "Every trip with you is a new favorite memory. You make the world brighter.",
        image: "/IMG_0227.JPEG",
    },
    {
        date: "Growing Closer",
        title: "My Best Friend",
        description: "Finding comfort in your silence and joy in your laughter.",
        image: "/IMG_0230.JPEG",
    },
    {
        date: "Forever",
        title: "Endless Love",
        description: "I can't wait for all the tomorrows we have yet to share.",
        image: "/IMG_0808.JPEG",
    },
];

function TimelineItem({ event, index }: { event: typeof milestones[0]; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex items-center justify-between w-full mb-12 md:mb-24 ${isEven ? "flex-row" : "flex-row-reverse"
                }`}
        >
            {/* Content Side */}
            <div className="w-5/12 hidden md:block">
                <div className={`p-6 bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-shadow ${isEven ? "text-right" : "text-left"}`}>
                    <span className="text-pink-500 font-bold tracking-wider text-sm uppercase mb-2 block">
                        {event.date}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
            </div>

            {/* Center Line & Dot */}
            <div className="w-2/12 flex justify-center relative">
                <div className="w-1 h-full bg-pink-200 absolute top-0 bottom-0 -z-10" />
                <div className="w-8 h-8 bg-pink-500 rounded-full border-4 border-white shadow-lg z-10 relative">
                    <div className="absolute inset-0 bg-pink-400 rounded-full animate-ping opacity-20" />
                </div>
            </div>

            {/* Image Side */}
            <div className="w-5/12 pl-4 md:pl-0">
                <div className={`relative h-48 md:h-64 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500 ${isEven ? "md:-rotate-2" : "md:rotate-2"}`}>
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                    />
                </div>
                {/* Mobile Content (visible only on small screens) */}
                <div className="md:hidden mt-4 bg-white/80 p-4 rounded-xl shadow-sm border border-pink-50">
                    <span className="text-pink-500 font-bold text-xs uppercase mb-1 block">
                        {event.date}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-primary mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
            </div>
        </motion.div>
    );
}

export function Timeline() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={ref} className="py-20 bg-gradient-to-b from-white to-pink-50 dark:from-background dark:to-background/50 overflow-hidden">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-primary font-serif mb-4">
                        Our Journey
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Every step we've taken together has been a beautiful adventure.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Animated Vertical Line */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-red-300 to-pink-300 -translate-x-1/2 hidden md:block"
                    />

                    {milestones.map((event, index) => (
                        <TimelineItem key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
