'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Users, Zap, Award, BookOpen, Heart } from 'lucide-react';
import Link from 'next/link';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Comunidad Educativa Activa',
    description: 'Más de 850 estudiantes formando parte de una comunidad comprometida con la excelencia.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Infraestructura Moderna',
    description: 'Aulas equipadas con tecnología de punta, laboratorios y áreas deportivas profesionales.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Docentes Calificados',
    description: '45+ profesores especializados con experiencia en educación de calidad.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Metodología Integral',
    description: 'Enfoque educativo que combina lo académico, emocional, físico y social.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Valores y Principios',
    description: 'Formamos estudiantes íntegros con valores éticos y responsabilidad social.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: '98% Tasa de Aprobación',
    description: 'Resultados académicos comprobados que demuestran nuestra calidad educativa.',
  },
];

const processSteps = [
  { number: '1', title: 'Solicitud de Admisión', description: 'Completa el formulario de registro en línea' },
  { number: '2', title: 'Evaluación', description: 'Realiza pruebas de evaluación académica' },
  { number: '3', title: 'Entrevista', description: 'Conoce a nuestro equipo y visita las instalaciones' },
  { number: '4', title: 'Aprobación', description: 'Recibe la notificación de admisión' },
];

export function AdmissionCTASection() {
  const shouldAnimate = !useReducedMotion();
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/4 hidden md:block" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-5">
            ✨ ¿Por qué elegir nuestro colegio?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ofrecemos educación de excelencia
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Con más de 25 años de trayectoria, somos líderes en educación integral. Nuestros estudiantes desarrollan académicamente, emocionalmente y socialmente en un ambiente seguro y moderno.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:border-blue-300 transition-all duration-300 group cursor-pointer h-full">
                <motion.div
                  className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 10 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              Proceso de Admisión
            </h3>
            <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
              Sigue estos simples pasos para formar parte de nuestra comunidad educativa
            </p>
          </div>

          {/* Progress Container */}
          <div className="relative">
            {/* Background card */}
            <div className="hidden md:block absolute inset-x-0 top-12 h-32 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl -z-10" />
            
            <div className="grid md:grid-cols-4 gap-6 relative md:py-8">
              {/* Animated Progress Bar - Desktop */}
              <motion.div className="hidden md:block absolute top-24 left-0 right-0 h-2 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-full -translate-y-1/2">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 rounded-full shadow-xl shadow-fuchsia-500/50"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5, ease: 'easeInOut', repeat: shouldAnimate ? Infinity : 0 }}
                />
              </motion.div>

              {processSteps.map((step, index) => {
                const stepDuration = 5;
                const stepDuration_per_step = stepDuration / processSteps.length;
                const stepStart = index * stepDuration_per_step;
                const stepEnd = stepStart + stepDuration_per_step;
                
                return (
                  <motion.div
                    key={step.number}
                    className="flex flex-col items-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative z-10 mb-8">
                      <div className="relative">
                        {/* Outer animated ring */}
                        <motion.div
                          className="absolute inset-0 w-24 h-24 rounded-full"
                          animate={
                            shouldAnimate
                              ? { scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }
                              : { scale: 1, opacity: 0.2 }
                          }
                          transition={{
                            duration: 2.5,
                            delay: stepStart,
                            repeat: shouldAnimate ? Infinity : 0,
                            repeatDelay: stepDuration - 2.5
                          }}
                          style={{
                            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)'
                          }}
                        />

                        {/* Main circle with dual-tone gradient */}
                        <motion.div
                          className="w-24 h-24 rounded-full text-white flex items-center justify-center font-bold text-2xl shadow-2xl relative z-10 border-4 border-white overflow-hidden bg-gradient-to-br from-indigo-500 to-blue-500"
                          animate={
                            shouldAnimate
                              ? {
                                  background: [
                                    'linear-gradient(135deg, #6366f1, #3b82f6)',
                                    'linear-gradient(135deg, #a855f7, #6366f1)',
                                    'linear-gradient(135deg, #ec4899, #a855f7)',
                                    'linear-gradient(135deg, #6366f1, #3b82f6)'
                                  ]
                                }
                              : undefined
                          }
                          transition={{
                            duration: stepDuration,
                            repeat: shouldAnimate ? Infinity : 0,
                            ease: 'linear'
                          }}
                        >
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full"
                            animate={shouldAnimate ? { opacity: [0, 0.5, 0] } : { opacity: 0 }}
                            transition={{
                              duration: 0.8,
                              delay: stepStart,
                              repeat: shouldAnimate ? Infinity : 0,
                              repeatDelay: stepDuration - 0.8
                            }}
                          />
                          
                          <span className="relative z-10">{step.number}</span>
                        </motion.div>

                        {/* Success checkmark */}
                        <motion.div
                          className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: stepStart + 0.4,
                            repeat: shouldAnimate ? Infinity : 0,
                            repeatDelay: stepDuration - 0.5
                          }}
                        >
                          ✓
                        </motion.div>

                        {/* Progress indicator line - shows completion status */}
                        <svg className="absolute inset-0 w-24 h-24" viewBox="0 0 100 100">
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="url(#progressGradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            initial={{ strokeDashoffset: 283 }}
                            animate={shouldAnimate ? { strokeDashoffset: 283 } : { strokeDashoffset: 0 }}
                            transition={{
                              duration: stepDuration,
                              repeat: shouldAnimate ? Infinity : 0,
                              ease: 'easeInOut'
                            }}
                            style={{
                              strokeDasharray: 283,
                              strokeDashoffset: 283,
                              transform: 'rotate(-90deg)',
                              transformOrigin: '50% 50%',
                              filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.3))'
                            }}
                          />
                          <defs>
                            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ec4899" />
                              <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    <div className="text-center">
                      <motion.h4
                        className="font-bold text-gray-900 text-lg mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      >
                        {step.title}
                      </motion.h4>
                      <p className="text-sm text-gray-600 leading-relaxed px-2 min-h-10">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
          </div>

          <motion.div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-4xl font-bold mb-4">¿Te gustaría conocer más?</h3>
            <p className="text-xl text-blue-100 mb-8">
              Contáctanos hoy y descubre por qué somos la opción ideal para la formación de tus hijos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <motion.div
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contactar ahora
                </motion.div>
              </Link>

              <Link href="/admision">
                <motion.div
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Iniciar proceso
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
