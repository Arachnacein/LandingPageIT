import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  @ViewChild('formRef') formRef!: ElementRef<HTMLFormElement>;
  messageSent = false;
  isSending = false;

  formData = {
    reply_to: '',
    subject: '',
    message: ''
  };

  private formspreeEndpoint = 'https://formspree.io/f/mblgpzqg';

  constructor(private http: HttpClient) {}

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

    const formDataPayload = new FormData();
    formDataPayload.append('reply_to', this.formData.reply_to);
    formDataPayload.append('subject', this.formData.subject);
    formDataPayload.append('message', this.formData.message);

    this.http.post(this.formspreeEndpoint, formDataPayload).subscribe({
      next: () => {
        this.messageSent = true;
        this.isSending = false;
        this.formRef.nativeElement.reset();
        this.formData = { reply_to: '', subject: '', message: '' };

        setTimeout(() => {
          this.messageSent = false;
        }, 4000);
      },
      error: (error) => {
        console.error('Błąd przy wysyłaniu e-maila:', error);
        this.isSending = false;
      }
    });
  }
}
