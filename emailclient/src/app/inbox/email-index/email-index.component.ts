import { Component } from '@angular/core';
import { EmailService, EmailSummary } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrl: './email-index.component.css',
})
export class EmailIndexComponent {
  emails: EmailSummary[] | null = null;

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.emailService.getEmails().subscribe((v) => {
      this.emails = v;
    });
  }
}
