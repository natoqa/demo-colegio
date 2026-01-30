'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Lightbulb, Compass } from 'lucide-react';

interface LevelCard {
  id: string;
  name: string;
  title: string;
  description: string;
  href: string;
  image: string;
  icon: React.ReactNode;
  color: {
    light: string;
    main: string;
    dark: string;
  };
}

const levels: LevelCard[] = [
  {
    id: 'inicial',
    name: 'Inicial',
    title: 'Nivel Inicial',
    description: 'Primer ciclo de educación formal. Desarrollo cognitivo, emocional y social en un ambiente lúdico y seguro.',
    href: '/niveles/inicial',
    image: '/images/inicial.jpg',
    icon: <Lightbulb className="w-6 h-6" />,
    color: {
      light: 'from-yellow-400/20 to-orange-400/20',
      main: 'bg-yellow-500',
      dark: 'text-yellow-600',
    },
  },
  {
    id: 'primaria',
    name: 'Primaria',
    title: 'Nivel Primaria',
    description: 'Educación básica integral con énfasis en formación académica, desarrollo de habilidades y valores.',
    href: '/niveles/primaria',
    image: '/images/primaria.jpg',
    icon: <BookOpen className="w-6 h-6" />,
    color: {
      light: 'from-blue-400/20 to-cyan-400/20',
      main: 'bg-blue-500',
      dark: 'text-blue-600',
    },
  },
  {
    id: 'secundaria',
    name: 'Secundaria',
    title: 'Nivel Secundaria',
    description: 'Formación integral con preparación académica avanzada, liderazgo y orientación vocacional.',
    href: '/niveles/secundaria',
    image: '/images/secundaria.jpg',
    icon: <Compass className="w-6 h-6" />,
    color: {
      light: 'from-purple-400/20 to-pink-400/20',
      main: 'bg-purple-500',
      dark: 'text-purple-600',
    },
  },
];

export function LevelsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
              <span className="text-blue-600 text-sm font-semibold">📚 Educación Integral</span>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Nuestros Niveles Educativos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Educación de calidad adaptada a cada etapa del desarrollo del estudiante
          </p>
          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"
          />
        </motion.div>

        {/* Levels Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 pt-8">
          {levels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={level.href}>
                <motion.div
                  className="group cursor-pointer h-full flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Container with Overlay */}
                  <div className="relative h-64 overflow-hidden bg-black flex-shrink-0">
                    <Image
                      src={level.image}
                      alt={level.title}
                      fill
                      className="object-cover w-full h-full transition-all duration-500 group-hover:grayscale grayscale-0 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Icon Badge */}
                    <motion.div
                      className={`absolute top-6 right-6 ${level.color.main} text-white p-3 rounded-xl shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {level.icon}
                    </motion.div>

                    {/* Title on Image with Better Contrast */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <motion.div
                        className="bg-gradient-to-r from-black/70 to-black/40 rounded-lg px-4 py-3"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <h3 className="text-3xl font-bold text-white">
                          {level.name}
                        </h3>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 p-8 bg-gradient-to-br ${level.color.light} backdrop-blur-sm flex flex-col border border-gray-100/50`}>
                    <p className="text-gray-700 mb-8 flex-grow leading-relaxed">
                      {level.description}
                    </p>

                    {/* CTA Button */}
                    <motion.div
                      className={`flex items-center font-semibold ${level.color.dark} group-hover:gap-3 transition-all duration-300`}
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Explorar</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
