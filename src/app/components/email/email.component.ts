import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  @ViewChild('formRef') formRef!: ElementRef<HTMLFormElement>;
  messageSent = false;
  isSending = false;

  formData: {
    reply_to: string;
    subject: string;
    message: string;
  } = {
    reply_to: '',
    subject: '',
    message: ''
  };

  get isFormValid(): boolean {
    return (
      (this.formData.subject || '').trim().length >= 5 &&
      (this.formData.message || '').trim().length >= 20
    );
  }

  get subjectTooShort(): boolean {
    return this.formData.subject.trim().length > 0 && this.formData.subject.trim().length <= 5;
  }

  get messageTooShort(): boolean {
    return this.formData.message.trim().length > 0 && this.formData.message.trim().length < 20;
  }

  sendEmail() {
    if (!this.isFormValid) return;

    this.isSending = true;

    emailjs.sendForm(
      'service_9df5s2a',
      'template_jc6004o',
      this.formRef.nativeElement,
      '_fM9NjuKEXZNF00ln'
    ).then(() => {
      this.messageSent = true;
      this.isSending = false;
      this.formRef.nativeElement.reset();
      this.formData = { reply_to: '', subject: '', message: '' };

      setTimeout(() => {
        this.messageSent = false;
      }, 4000);

    }, (error) => {
      console.error('Błąd przy wysyłaniu e-maila:', error);
      this.isSending = false;
    });
  }
}
