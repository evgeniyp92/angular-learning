import { Component } from '@angular/core';
import { Email } from '../email';
import { AuthService } from '../../auth/auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css',
})
export class EmailCreateComponent {
  showModal = false;
  email: Email;

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: this.authService.username + '@angular-email.com',
    };
  }

  onSubmit(event: Email) {
    console.log(event);
    this.emailService.sendEmail(event).subscribe((v) => {
      console.log(v);
      this.showModal = false;
    });
  }
}
