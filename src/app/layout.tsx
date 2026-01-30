import type { Metadata } from 'next';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Colegio - Institución Educativa',
  description: 'Sitio web oficial del colegio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
