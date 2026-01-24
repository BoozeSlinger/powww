"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function StorySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-black/95">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            style={{ y: y2 }}
            className="space-y-8 lg:order-1 order-2"
          >
            <span className="text-primary font-kanit uppercase tracking-widest text-lg">Our Story</span>
            <h2 className="text-5xl md:text-7xl font-kanit font-bold leading-[0.9]">
              MORE THAN <br />
              JUST AMEAL.
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg font-outfit font-light max-w-lg">
                <p>
                  Born in the heart of Riverside, <span className="text-white font-medium">GraPow</span> was created to disrupt the standard. We believed that Thai cuisine deserved a stage as vibrant and dynamic as the flavors themselves.
                </p>
                <p>
                  By day, a culinary sanctuary. By night, an electric escape. We are a fusion of traditional wok-fired heat and modern lounge aesthetics.
                </p>
            </div>
            <div className="pt-8">
                <div className="h-[1px] w-24 bg-accent mb-4" />
                <span className="font-caveat text-3xl text-white block transform -rotate-2">
                    "Thai food with a pulse."
                </span>
            </div>
          </motion.div>

          {/* Visuals */}
          <div className="relative h-[600px] w-full lg:order-2 order-1">
             {/* Abstract Floating Eelements */}
             <motion.div 
                style={{ y: y1 }}
                className="absolute top-0 right-0 w-3/4 h-3/4 border border-zinc-800 rounded-lg overflow-hidden z-10"
             >
                {/* Placeholder for Interior Shot - using a gradient for now if no image */}
                <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-black p-10 flex items-center justify-center">
                    <span className="text-zinc-800 text-9xl font-black opacity-20 rotate-90">VIBE</span>
                </div>
             </motion.div>

             <motion.div
                style={{ y: y2 }} 
                className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-zinc-900/50 backdrop-blur-md border border-zinc-700/50 z-20 p-8 flex flex-col justify-end"
             >
                 <h3 className="text-4xl font-kanit text-white mb-2">THE LOUNGE</h3>
                 <p className="text-sm text-zinc-400 font-outfit">
                    Open late on weekends.<br/>
                    Live DJ sets.<br/>
                    Craft Cocktails.
                 </p>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
