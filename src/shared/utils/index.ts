// Utilidades compartidas
import { clsx, type ClassValue } from 'clsx';

/**
 * Combina clases de CSS de forma condicional
 * Usa clsx para un manejo más robusto de clases
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Formatea una fecha al formato español peruano
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

/**
 * Trunca un texto a una longitud máxima
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Valida un email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Genera un delay para animaciones escalonadas
 */
export function getStaggerDelay(index: number, baseDelay: number = 0.1): number {
  return index * baseDelay;
}
