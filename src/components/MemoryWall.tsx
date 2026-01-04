"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Duplicate memories to fill the larger heart
const baseMemories = [
    { id: 1, image: "/9f5d52d1-0797-4520-9b8b-cd92d231fa86.jpg", title: "Us" },
    { id: 2, image: "/IMG_0048.JPG", title: "Sweet Moment" },
    { id: 3, image: "/IMG_0138.JPG", title: "Adventure" },
    { id: 4, image: "/IMG_0165.JPG", title: "Together" },
    { id: 5, image: "/IMG_0209.JPG", title: "Smiles" },
    { id: 6, image: "/IMG_0227.JPEG", title: "Love" },
    { id: 7, image: "/IMG_0230.JPEG", title: "Happiness" },
    { id: 8, image: "/IMG_0236.JPG", title: "Joy" },
    { id: 9, image: "/IMG_0249.JPG", title: "Forever" },
    { id: 10, image: "/IMG_0259.JPG", title: "My Heart" },
    { id: 11, image: "/IMG_0265.JPG", title: "Precious" },
    { id: 12, image: "/IMG_0283.JPG", title: "Memories" },
    { id: 13, image: "/IMG_0368.JPG", title: "Laughter" },
    { id: 14, image: "/IMG_0370.JPG", title: "Sunshine" },
    { id: 15, image: "/IMG_0749.JPEG", title: "Dream" },
    { id: 16, image: "/IMG_0808.JPEG", title: "Soulmate" },
    { id: 17, image: "/IMG_0811.JPEG", title: "Cherish" },
    { id: 18, image: "/IMG_0830.JPG", title: "Adore" },
    { id: 19, image: "/IMG_0901.JPG", title: "Always" },
    { id: 20, image: "/IMG_1623.JPG", title: "Best Friend" },
    { id: 21, image: "/IMG_3712.JPG", title: "Beautiful" },
    { id: 22, image: "/IMG_4317.JPG", title: "Cute" },
    { id: 23, image: "/IMG_4327.JPG", title: "Fun" },
    { id: 24, image: "/IMG_4563.JPEG", title: "Date Night" },
    { id: 25, image: "/IMG_4609.JPEG", title: "Travel" },
    { id: 26, image: "/IMG_4611.JPEG", title: "Cozy" },
    { id: 27, image: "/IMG_4631.JPG", title: "Silly" },
    { id: 28, image: "/IMG_4658.JPEG", title: "Warmth" },
    { id: 29, image: "/IMG_6278.JPG", title: "Sparkle" },
    { id: 30, image: "/IMG_6305.JPG", title: "Magic" },
    { id: 31, image: "/IMG_6798.JPG", title: "Hugs" },
    { id: 32, image: "/IMG_6815.JPG", title: "Kisses" },
    { id: 33, image: "/IMG_9722.JPEG", title: "Everything" },
    { id: 34, image: "/IMG_9754.JPG", title: "Yours" },
    { id: 35, image: "/IMG_9791.JPG", title: "Mine" },
    { id: 36, image: "/IMG_9897.JPG", title: "Us Forever" },
    { id: 37, image: "/IMG_9937.JPG", title: "Love You" },
    { id: 38, image: "/dad6c35b-92a6-4a90-a383-3e0bbad10210.jpg", title: "Sweetheart" },
];

// Create enough memories for the grid
const memories = [...baseMemories].map((m, i) => ({
    ...m,
    id: i,
}));

// 7 columns grid
// 1 = Memory, 0 = Empty Space
const heartPattern = [
    0, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 0,
    0, 0, 1, 1, 1, 0, 0,
    0, 0, 0, 1, 0, 0, 0,
];

export function MemoryWall() {
    return (
        <section id="memories" className="py-20 bg-background overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-pink-200/20 via-red-200/20 to-pink-200/20 blur-3xl rounded-full" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary font-serif">
                        Our Love Story
                    </h2>
                    <p className="text-muted-foreground text-lg font-light">
                        A collection of my favorite moments with you.
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    <motion.div
                        className="grid grid-cols-7 gap-2 md:gap-3 max-w-2xl w-full"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                    >
                        {heartPattern.map((isItem, index) => {
                            if (!isItem) return <div key={`empty-${index}`} className="aspect-square" />;

                            const memoryIndex = heartPattern
                                .slice(0, index)
                                .reduce((acc, curr) => acc + curr, 0);
                            const memory = memories[memoryIndex];

                            if (!memory) return <div key={`missing-${index}`} className="aspect-square" />;

                            return (
                                <motion.div
                                    key={memory.id}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: memoryIndex * 0.02,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        zIndex: 50,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="aspect-square relative rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer group bg-gray-100"
                                >
                                    <Image
                                        src={memory.image}
                                        alt={memory.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 14vw, 100px"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
