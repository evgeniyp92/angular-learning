import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrl: './email-reply.component.css',
})
export class EmailReplyComponent implements OnChanges {
  showModal = false;
  @Input() email: Email | null = null;

  constructor(private emailService: EmailService) {}

  ngOnChanges() {
    // @ts-expect-error TS is mad about id possibly being null
    this.email = {
      ...this.email,
      from: this.email!.to,
      to: this.email!.from,
      subject: 'RE: ' + this.email!.subject,
      text:
        '\n\n-----Original Message-----\n> ' +
        this.email!.text.replace(/\n/gi, '\n> '),
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
