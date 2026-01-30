'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Users, Award, BookOpen, TrendingUp } from 'lucide-react';

interface Stat {
  value: number;
  label: string;
  suffix: string;
  icon: React.ReactNode;
  color: string;
}

const stats: Stat[] = [
  {
    value: 850,
    label: 'Estudiantes',
    suffix: '+',
    icon: <Users className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    value: 25,
    label: 'Años de experiencia',
    suffix: '+',
    icon: <Award className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    value: 98,
    label: 'Tasa de aprobación',
    suffix: '%',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
  },
  {
    value: 45,
    label: 'Docentes calificados',
    suffix: '+',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'from-orange-500 to-amber-500',
  },
];

function Counter({ value, suffix, hasStarted }: { value: number; suffix: string; hasStarted: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!hasStarted) {
      count.set(0);
      return;
    }

    const controls = animate(count, value, { duration: 2.5, ease: 'easeOut' });
    return controls.stop;
  }, [count, value, hasStarted]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest.toString();
      }
    });
    return () => unsubscribe();
  }, [rounded]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={nodeRef}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

export function StatsSection() {
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-slate-900">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Números que nos respaldan
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Más de dos décadas formando estudiantes con excelencia académica
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl overflow-hidden">
                  {/* Icon with Gradient Background */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">{stat.icon}</div>
                  </motion.div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} hasStarted={hasStarted} />
                  </div>

                  {/* Label */}
                  <div className="text-blue-100 font-medium text-sm md:text-base">
                    {stat.label}
                  </div>

                  {/* Decorative Gradient Orb */}
                  <div
                    className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br ${stat.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
