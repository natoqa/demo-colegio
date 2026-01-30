'use client';

import { Menu, X, GraduationCap, Facebook, Instagram, Music, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/shared/utils';

interface NavItem {
  href: string;
  label: string;
  submenu?: NavItem[];
}

export interface NavbarProps {
  logoText?: string;
  logoIcon?: React.ReactNode;
  navItems?: NavItem[];
  showSocials?: boolean;
}

const defaultNavItems: NavItem[] = [
  { href: '/', label: 'Inicio' },
  {
    href: '/nosotros',
    label: 'Nosotros',
    submenu: [
      { href: '/nosotros/historia', label: 'Historia' },
      { href: '/nosotros/mision-vision', label: 'Misión y Visión' },
      { href: '/nosotros/equipo', label: 'Equipo Docente' },
      { href: '/nosotros/instalaciones', label: 'Instalaciones' },
    ],
  },
  {
    href: '/admision',
    label: 'Admisión',
    submenu: [
      { href: '/admision/requisitos', label: 'Requisitos' },
      { href: '/admision/proceso', label: 'Proceso' },
      { href: '/admision/documentos', label: 'Documentos' },
      { href: '/admision/becas', label: 'Becas y Financiamiento' },
    ],
  },
  {
    href: '/niveles',
    label: 'Niveles',
    submenu: [
      { href: '/niveles/inicial', label: 'Inicial' },
      { href: '/niveles/primaria', label: 'Primaria' },
      { href: '/niveles/secundaria', label: 'Secundaria' },
    ],
  },
  { href: '/#programas', label: 'Programas' },
  { href: '/aula-virtual', label: 'Aula Virtual' },
  { href: '/contacto', label: 'Contacto' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
  { icon: Music, href: '#', label: 'TikTok', color: 'hover:text-gray-900' },
];

export function Navbar({
  logoText = 'Colegio',
  logoIcon = <GraduationCap className="w-8 h-8" />,
  navItems = defaultNavItems,
  showSocials = true,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white backdrop-blur-md backdrop-filter bg-opacity-95 shadow-sm border-b border-gray-100"
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-6 lg:py-7">
          {/* Logo Section */}
          <motion.a
            href="/"
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
              whileHover={{ rotate: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                {logoIcon}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {logoText}
              </span>
              <span className="text-sm text-gray-500 font-medium">Institución Educativa</span>
            </motion.div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, i) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => {
                  setHoveredItem(item.href);
                  if (item.submenu) setOpenDropdown(item.href);
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  setOpenDropdown(null);
                }}
              >
                <motion.a
                  href={item.href}
                  custom={i}
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative px-5 py-3 text-gray-700 font-medium text-base transition-colors flex items-center space-x-1"
                  onClick={(e) => {
                    if (item.submenu) e.preventDefault();
                  }}
                >
                  {/* Background hover effect */}
                  {hoveredItem === item.href && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  {/* Text */}
                  <motion.span
                    className="relative z-10 flex items-center space-x-1"
                    animate={{
                      color: hoveredItem === item.href ? '#2563eb' : '#374151',
                    }}
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <motion.div
                        animate={{ rotate: openDropdown === item.href ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    )}
                  </motion.span>

                  {/* Underline effect - siempre presente */}
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredItem === item.href ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </motion.a>

                {/* Dropdown Menu */}
                {item.submenu && openDropdown === item.href && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-0 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden min-w-[200px] z-50"
                  >
                    {item.submenu.map((subitem, subIndex) => (
                      <motion.a
                        key={subitem.href}
                        href={subitem.href}
                        className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-base font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: subIndex * 0.05 }}
                      >
                        {subitem.label}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Social Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Social Icons Desktop */}
            {showSocials && (
              <motion.div
                className="hidden lg:flex items-center space-x-3 border-l border-gray-200 pl-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={cn(
                      'p-2 rounded-lg bg-gray-100 text-gray-700 transition-all',
                      social.color
                    )}
                    whileHover={{ scale: 1.15, backgroundColor: '#f0f9ff' }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden pb-4"
            >
              <div className="space-y-2 pt-4 border-t border-gray-100">
                {navItems.map((item, i) => (
                  <div key={item.href}>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => {
                        if (item.submenu) {
                          setOpenDropdown(openDropdown === item.href ? null : item.href);
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                      className="w-full text-left px-4 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      {item.submenu && (
                        <motion.div
                          animate={{ rotate: openDropdown === item.href ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      )}
                    </motion.button>

                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {item.submenu && openDropdown === item.href && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-blue-50 rounded-lg"
                        >
                          {item.submenu.map((subitem) => (
                            <motion.a
                              key={subitem.href}
                              href={subitem.href}
                              className="block px-6 py-2 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.label}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Mobile Social Icons */}
                {showSocials && (
                  <div className="flex items-center space-x-3 px-4 py-4 border-t border-gray-100 mt-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className={cn(
                          'p-2 rounded-lg bg-gray-100 text-gray-700 transition-all',
                          social.color
                        )}
                        whileHover={{ scale: 1.15, backgroundColor: '#f0f9ff' }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
