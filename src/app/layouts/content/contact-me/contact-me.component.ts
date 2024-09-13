import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessagingService } from '../../../services/messaging.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css',
})
export class ContactMeComponent {
  // Model for form fields
  sendMessageForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(private messagingService: MessagingService) {}

  // This method will be called when the form is submitted
  onSubmit() {
    if (this.sendMessageForm.valid) {
      let name = this.sendMessageForm.controls['name'].value;
      let email = this.sendMessageForm.controls['email'].value;
      let message = this.sendMessageForm.controls['message'].value;
      this.messagingService.send(name, email, message);
      this.sendMessageForm.reset();
    } else {
      this.sendMessageForm.markAllAsTouched();
    }
  }
}
