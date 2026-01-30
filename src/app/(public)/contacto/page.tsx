'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/features/contact/components/ContactForm';
import { Card } from '@/shared/components/ui/Card';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@colegio.edu',
      href: 'mailto:info@colegio.edu',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+51 xxx xxx xxx',
      href: 'tel:+51xxxxxxxxx',
    },
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Lima, Perú',
      href: '#',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          ¿Tienes alguna pregunta? Estamos aquí para ayudarte. Contáctanos y te
          responderemos lo antes posible.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>

          {contactInfo.map((info, index) => (
            <Card
              key={info.title}
              delay={0.4 + index * 0.1}
              hover={false}
              className="flex items-start space-x-4"
            >
              <div className="bg-blue-100 p-3 rounded-lg">
                <info.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                {info.href !== '#' ? (
                  <a
                    href={info.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </div>
            </Card>
          ))}

          <Card delay={0.7} hover={false} className="bg-blue-50">
            <h3 className="font-semibold text-lg mb-2">Horario de atención</h3>
            <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
