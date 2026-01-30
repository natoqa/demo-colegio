import { ApiService } from '@/shared/services/api.service';
import type { ContactFormData, ContactResponse } from '../types';

export class ContactService {
  static async sendContactForm(
    data: ContactFormData
  ): Promise<ContactResponse> {
    return ApiService.post<ContactResponse>('/contact', data);
  }
}
