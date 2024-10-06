import { Injectable } from '@angular/core';
import '../../../public/assets/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  send(name: string, email: string, message: string) {
    Email.send({
      SecureToken: process.env['MESSAGING_TOKEN'],
      To: process.env['EMAIL_TO'],
      From: process.env['EMAIL_FROM'],
      Subject: name,
      Body: `From: ${email};\n${message}`,
    });
  }

  constructor() {}
}
