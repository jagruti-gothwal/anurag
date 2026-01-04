"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

const reasons = [
  { text: "Your kindness warms my heart", image: "/IMG_0048.JPG" },
  { text: "The way you make me laugh", image: "/IMG_0138.JPG" },
  { text: "Your unwavering support", image: "/IMG_0227.JPEG" },
  { text: "Your beautiful smile", image: "/IMG_0230.JPEG" },
  { text: "How safe I feel with you", image: "/IMG_0808.JPEG" },
  { text: "Our late night talks", image: "/IMG_4609.JPEG" },
];

function ImageCard({ text, image, index }: { text: string; image: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring" }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-80 w-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer group perspective-1000"
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />

      <Image
        src={image}
        alt={text}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
        unoptimized
      />

      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg transform transition-transform group-hover:scale-105">
          <Heart className="w-8 h-8 text-pink-500 fill-pink-500 mb-3 mx-auto drop-shadow-lg" />
          <p className="text-xl md:text-2xl font-bold text-white font-serif leading-tight drop-shadow-md">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Reasons() {
  return (
    <section className="py-20 bg-secondary/30 perspective-1000">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative inline-block"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-primary font-serif relative z-10">
            Why You Are Special
          </h2>
          <div className="absolute -top-6 -right-8 text-yellow-400 animate-bounce">
            <Sparkles size={32} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {reasons.map((reason, index) => (
            <ImageCard key={index} text={reason.text} image={reason.image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
