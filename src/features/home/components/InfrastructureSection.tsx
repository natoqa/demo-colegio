'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building2, ShieldCheck, Trees, MonitorSmartphone } from 'lucide-react';

const facilities = [
  {
    title: 'Aulas Modernas',
    description: 'Espacios amplios, iluminados y equipados para el aprendizaje activo.',
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: 'Seguridad Integral',
    description: 'Protocolos y vigilancia permanente para la tranquilidad de la comunidad.',
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: 'Áreas Verdes',
    description: 'Zonas abiertas que fomentan la recreación y el bienestar.',
    icon: <Trees className="w-5 h-5" />,
  },
  {
    title: 'Tecnología Educativa',
    description: 'Aulas multimedia y herramientas digitales para un aprendizaje moderno.',
    icon: <MonitorSmartphone className="w-5 h-5" />,
  },
];

const gallery = [
  { src: '/images/infra-1.jpg', alt: 'Aulas modernas' },
  { src: '/images/infra-2.jpg', alt: 'Laboratorios y tecnología' },
  { src: '/images/infra-3.png', alt: 'Áreas deportivas y recreativas' },
];

export function InfrastructureSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-5">
              🏫 Infraestructura de primer nivel
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Espacios pensados para aprender y crecer
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro colegio cuenta con ambientes seguros, modernos y funcionales que potencian el
              desarrollo académico, emocional y físico de cada estudiante.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {facilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex gap-3 p-4 rounded-xl bg-white shadow-sm border border-slate-100"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={gallery[2].src}
                alt={gallery[2].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
