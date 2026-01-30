'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Send } from 'lucide-react';
import { Button } from '@/shared/components/ui/Button';
import { Input } from '@/shared/components/ui/Input';
import { Card } from '@/shared/components/ui/Card';
import { ContactService } from '../services/contact.service';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await ContactService.sendContactForm(data);
      toast.success('¡Mensaje enviado exitosamente!', {
        description: 'Te responderemos pronto.',
      });
      reset();
    } catch (error) {
      toast.error('Error al enviar el mensaje', {
        description: 'Por favor, intenta nuevamente.',
      });
    }
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Nombre completo *"
          {...register('name')}
          error={errors.name?.message}
          placeholder="Tu nombre"
        />

        <Input
          label="Email *"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          placeholder="tu@email.com"
        />

        <Input
          label="Teléfono"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          placeholder="+51 999 999 999"
        />

        <Input
          label="Asunto *"
          {...register('subject')}
          error={errors.subject?.message}
          placeholder="Motivo de contacto"
        />

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje *
          </label>
          <textarea
            {...register('message')}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
            placeholder="Escribe tu mensaje aquí..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center space-x-2"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}</span>
        </Button>
      </form>
    </Card>
  );
}
