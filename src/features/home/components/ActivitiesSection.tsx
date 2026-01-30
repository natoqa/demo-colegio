'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Palette, 
  Music, 
  Trophy, 
  Laptop, 
  FlaskConical, 
  Languages,
  ChevronRight 
} from 'lucide-react';
import Link from 'next/link';

interface Activity {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
}

const activities: Activity[] = [
  {
    id: '1',
    title: 'Arte y Creatividad',
    description: 'Talleres de pintura, dibujo y manualidades para desarrollar la creatividad.',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    image: '/images/activity-arte.jpg',
  },
  {
    id: '2',
    title: 'Música y Danza',
    description: 'Clases de instrumentos, canto y expresión corporal.',
    icon: <Music className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-500',
    image: '/images/activity-musica.jpg',
  },
  {
    id: '3',
    title: 'Deportes',
    description: 'Fútbol, básquet, vóley y atletismo con instructores profesionales.',
    icon: <Trophy className="w-6 h-6" />,
    color: 'from-orange-500 to-amber-500',
    image: '/images/activity-deportes.jpg',
  },
  {
    id: '4',
    title: 'Tecnología',
    description: 'Robótica, programación y pensamiento computacional.',
    icon: <Laptop className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    image: '/images/activity-tecnologia.jpg',
  },
  {
    id: '5',
    title: 'Ciencias',
    description: 'Laboratorio de experimentos y proyectos científicos.',
    icon: <FlaskConical className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    image: '/images/activity-ciencias.jpg',
  },
  {
    id: '6',
    title: 'Idiomas',
    description: 'Inglés intensivo y programas de intercambio cultural.',
    icon: <Languages className="w-6 h-6" />,
    color: 'from-teal-500 to-cyan-500',
    image: '/images/activity-idiomas.jpg',
  },
];

export function ActivitiesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-5">
            🎨 Desarrollo Integral
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Actividades y Programas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complementamos la formación académica con actividades que potencian habilidades y talentos
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <motion.div
                className="relative group h-80 rounded-2xl shadow-lg cursor-pointer overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image */}
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-all duration-300" />

                {/* Colored Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-30 group-hover:opacity-40 transition-opacity duration-300`} />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  {/* Icon Badge */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${activity.color} shadow-lg self-start`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">{activity.icon}</div>
                  </motion.div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed mb-4 opacity-90">
                      {activity.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                      <span className="text-sm">Descubre más</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Border Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/admision">
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/50 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Descubre más sobre nuestros programas</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
