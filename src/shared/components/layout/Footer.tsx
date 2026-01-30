'use client';

import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, GraduationCap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/niveles', label: 'Niveles' },
    { href: '/#programas', label: 'Programas' },
    { href: '/aula-virtual', label: 'Aula Virtual' },
    { href: '/admision', label: 'Admisión' },
  ];

  const levelLinks = [
    { href: '/niveles/inicial', label: 'Nivel Inicial' },
    { href: '/niveles/primaria', label: 'Nivel Primaria' },
    { href: '/niveles/secundaria', label: 'Nivel Secundaria' },
  ];

  const contactLinks = [
    { icon: Mail, label: 'info@colegio.edu', href: 'mailto:info@colegio.edu' },
    { icon: Phone, label: '+51 (1) 2345-6789', href: 'tel:+51123456789' },
    { icon: MapPin, label: 'Lima, Perú', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />

      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Colegio</h3>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Formando el futuro a través de educación de calidad, valores éticos y desarrollo integral.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white p-2 rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-5 text-white">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.span
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Levels */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-5 text-white">Niveles</h4>
            <ul className="space-y-3">
              {levelLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.span
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-5 text-white">Contacto</h4>
            <ul className="space-y-4">
              {contactLinks.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    className="flex items-start gap-3 group"
                  >
                    <contact.icon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 group-hover:text-blue-400 transition-colors text-sm">
                      {contact.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="my-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; {currentYear} Colegio. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Términos de uso</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacidad</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
