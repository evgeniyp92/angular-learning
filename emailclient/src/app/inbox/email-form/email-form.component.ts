import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css',
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup | null = null; // set up the emailForm and assign it null for now
  @Input() initialValues: Email | null = null; // get values passed by email-create

  ngOnInit() {
    // null check
    if (this.initialValues) {
      const { subject, to, from, text } = this.initialValues;
      // set up the formGroup
      this.emailForm = new FormGroup({
        to: new FormControl(to),
        from: new FormControl(from),
        subject: new FormControl(subject),
        text: new FormControl(text),
      });
    }
  }
}
