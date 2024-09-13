import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import '../../../public/assets/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  send(name: string, email: string, message: string) {
    Email.send({
      SecureToken: '079125fd-f8d8-4873-aa69-f1457a2a625d',
      To: 'maksym.portfolio@gmail.com',
      From: 'maksym.portfolio@gmail.com',
      Subject: name,
      Body: `From: ${email};\n${message}`,
    });
  }

  constructor() {}
}
