'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

// Typing effect for text
const useTypingEffect = (text: string, speed: number = 80) => {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(id);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return displayText;
};

export function HeroSection() {
  const typedTitle = useTypingEffect('Formando el Futuro de Nuestros Hijos', 80);
  const shouldAnimate = !useReducedMotion();
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.webp"
        alt="Estudiantes en el colegio"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-900/45 via-transparent to-slate-900/45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="px-4 py-2 rounded-full bg-blue-500/30 border border-blue-400/60 md:backdrop-blur-sm">
              <span className="text-blue-100 text-sm font-medium">🎓 Educación de Excelencia</span>
            </div>
          </motion.div>

          {/* Main Title with Typing Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg min-h-[100px] max-w-4xl mx-auto"
          >
            <span className="text-white">
              {typedTitle}
            </span>
            <motion.span
              animate={shouldAnimate ? { opacity: [1, 0] } : { opacity: 1 }}
              transition={{ duration: 0.8, repeat: shouldAnimate ? Infinity : 0 }}
              className="text-blue-300"
            >
              |
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-blue-50 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Una institución comprometida con la excelencia académica, valores éticos y el desarrollo integral de nuestros estudiantes.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/admision"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/50"
              >
                Solicita tu Admisión
                <motion.span
                  animate={shouldAnimate ? { x: [0, 4, 0] } : { x: 0 }}
                  transition={{ duration: 1.5, repeat: shouldAnimate ? Infinity : 0 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={shouldAnimate ? { y: [0, 12, 0] } : { y: 0 }}
          transition={{ duration: 1.5, repeat: shouldAnimate ? Infinity : 0 }}
        >
          <div className="text-center">
            <p className="text-white/70 text-sm mb-3 font-medium">Desliza para conocer más</p>
            <motion.svg
              className="w-6 h-6 text-blue-300 mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={shouldAnimate ? { y: [0, 8, 0] } : { y: 0 }}
              transition={{ duration: 1.5, repeat: shouldAnimate ? Infinity : 0 }}
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none hidden md:block"
        animate={shouldAnimate ? { scale: [1, 1.2, 1], x: [0, 30, 0] } : { scale: 1, x: 0 }}
        transition={{ duration: 8, repeat: shouldAnimate ? Infinity : 0 }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none hidden md:block"
        animate={shouldAnimate ? { scale: [1, 1.3, 1], x: [0, -30, 0] } : { scale: 1, x: 0 }}
        transition={{ duration: 8, repeat: shouldAnimate ? Infinity : 0, delay: 2 }}
      />
    </section>
  );
}
