/**
 * SNIPPETS DE CÓDIGO PARA EL NAVBAR
 * Copia y pega estos ejemplos en tu proyecto
 */

import { Navbar } from '@/shared/components/layout/Navbar';
import {
  GraduationCap,
  BookOpen,
  Lightbulb,
  Zap,
  Crown,
  Rocket,
} from 'lucide-react';

// ============================================
// SNIPPET 1: Navbar por Defecto (Lo más simple)
// ============================================

export function NavbarDefault() {
  return <Navbar />;
}

// Resultado: Logo "Colegio" + 7 items + redes sociales

// ============================================
// SNIPPET 2: Navbar con Logo Personalizado
// ============================================

export function NavbarCustomLogo() {
  return (
    <Navbar
      logoText="Instituto Creativo"
      logoIcon={<Lightbulb className="w-8 h-8 text-white" />}
    />
  );
}

// Resultado: Logo "Instituto Creativo" con icono de bombilla

// ============================================
// SNIPPET 3: Navbar con Menos Items
// ============================================

export function NavbarMinimal() {
  const minimalNav = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/admision', label: 'Admisión' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return <Navbar navItems={minimalNav} />;
}

// Resultado: 4 items en lugar de 7

// ============================================
// SNIPPET 4: Navbar sin Redes Sociales
// ============================================

export function NavbarNoSocials() {
  return <Navbar showSocials={false} />;
}

// Resultado: Solo logo + navegación, sin redes

// ============================================
// SNIPPET 5: Navbar Profesional Completo
// ============================================

export function NavbarProfessional() {
  const professionalNav = [
    { href: '/', label: 'Inicio' },
    { href: '/quienes-somos', label: 'Quiénes Somos' },
    { href: '/programas', label: 'Programas Académicos' },
    { href: '/admision', label: 'Admisión' },
    { href: '/eventos', label: 'Eventos' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <Navbar
      logoText="Colegio Excellence"
      logoIcon={<Crown className="w-8 h-8 text-white" />}
      navItems={professionalNav}
      showSocials={true}
    />
  );
}

// ============================================
// SNIPPET 6: Navbar para Startup Educativo
// ============================================

export function NavbarStartup() {
  const startupNav = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Get in Touch' },
  ];

  return (
    <Navbar
      logoText="EduHub"
      logoIcon={<Rocket className="w-8 h-8 text-white" />}
      navItems={startupNav}
      showSocials={true}
    />
  );
}

// ============================================
// SNIPPET 7: Navbar Multiidioma (Template)
// ============================================

export function NavbarMultilang() {
  const lang = 'es'; // Cambiar a 'en' para inglés

  const translations = {
    es: {
      inicio: 'Inicio',
      nosotros: 'Nosotros',
      admision: 'Admisión',
      contacto: 'Contacto',
    },
    en: {
      inicio: 'Home',
      nosotros: 'About',
      admision: 'Admission',
      contacto: 'Contact',
    },
  };

  const t = translations[lang as keyof typeof translations];

  const multiLangNav = [
    { href: '/', label: t.inicio },
    { href: '/nosotros', label: t.nosotros },
    { href: '/admision', label: t.admision },
    { href: '/contacto', label: t.contacto },
  ];

  return <Navbar navItems={multiLangNav} />;
}

// ============================================
// SNIPPET 8: Navbar con Paths Dinámicos
// ============================================

export function NavbarDynamic() {
  // Obtén los items de una API o configuración
  const dynamicNav = [
    { href: '/', label: 'Inicio' },
    { href: '/niveles/inicial', label: 'Inicial' },
    { href: '/niveles/primaria', label: 'Primaria' },
    { href: '/niveles/secundaria', label: 'Secundaria' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return <Navbar navItems={dynamicNav} />;
}

// ============================================
// SNIPPET 9: Navbar para Múltiples Secciones
// ============================================

export function NavbarMultisection() {
  const multiSectionNav = [
    { href: '/', label: 'Inicio' },
    { href: '/educacion', label: 'Educación' },
    { href: '/actividades', label: 'Actividades' },
    { href: '/comunidad', label: 'Comunidad' },
    { href: '/recursos', label: 'Recursos' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <Navbar
      logoText="Colegio Integral"
      logoIcon={<BookOpen className="w-8 h-8 text-white" />}
      navItems={multiSectionNav}
      showSocials={true}
    />
  );
}

// ============================================
// SNIPPET 10: Navbar Ultra Minimalista
// ============================================

export function NavbarMinimalist() {
  const minimalNav = [
    { href: '/', label: 'Inicio' },
    { href: '/admision', label: 'Admisión' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <Navbar
      logoText="Colegio"
      logoIcon={<Zap className="w-8 h-8 text-white" />}
      navItems={minimalNav}
      showSocials={false}
    />
  );
}

// ============================================
// SNIPPET BONUS: Custom Hook para Navbar
// ============================================

export function useNavbarConfig(schoolName: string) {
  return {
    logoText: schoolName,
    logoIcon: <GraduationCap className="w-8 h-8 text-white" />,
    navItems: [
      { href: '/', label: 'Inicio' },
      { href: '/nosotros', label: 'Nosotros' },
      { href: '/admision', label: 'Admisión' },
      { href: '/contacto', label: 'Contacto' },
    ],
    showSocials: true,
  };
}

// Uso:
// const config = useNavbarConfig('Mi Colegio');
// <Navbar {...config} />

// ============================================
// PATRONES DE USO
// ============================================

/**
 * PATRÓN 1: Navbar Simple
 * <Header />
 *
 * PATRÓN 2: Navbar Personalizado
 * <Header logoText="Mi Colegio" />
 *
 * PATRÓN 3: Navbar Completo
 * <Header {...config} />
 *
 * PATRÓN 4: Navbar Condicional
 * {isLoggedIn ? <Header /> : <NavbarMinimal />}
 *
 * PATRÓN 5: Navbar con Provider
 * <NavbarProvider>
 *   <Header />
 * </NavbarProvider>
 */

// ============================================
// TIPS Y TRUCOS
// ============================================

/**
 * TIP 1: Cambiar el color del hover
 * Modifica en Header.tsx:
 * - hover:text-blue-600 → hover:text-green-600
 *
 * TIP 2: Agregar más redes sociales
 * Modifica el array socialLinks en Header.tsx
 *
 * TIP 3: Usar imagen como logo
 * import Image from 'next/image';
 * logoIcon={<Image src="/logo.png" alt="Logo" width={32} height={32} />}
 *
 * TIP 4: Cambiar breakpoint responsivo
 * Cambia "lg" por "md" en Header.tsx
 *
 * TIP 5: Personalizar subtítulo del logo
 * Modifica "Institución Educativa" en Header.tsx
 */
