import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css',
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup | null = null; // set up the emailForm and assign it null for now
  @Input() initialValues: Email | null = null; // get values passed by email-create
  @Output() emailSubmit = new EventEmitter(); // emit the emailSubmit event

  ngOnInit() {
    // null check
    if (this.initialValues) {
      const { subject, to, from, text } = this.initialValues;
      // set up the formGroup
      this.emailForm = new FormGroup({
        to: new FormControl(to, [Validators.required, Validators.email]),
        from: new FormControl({ value: from, disabled: true }),
        subject: new FormControl(subject, Validators.required),
        text: new FormControl(text, [Validators.required]),
      });
    }
  }

  onSubmit() {
    if (!this.emailForm || this.emailForm.invalid) return;
    console.log(this.emailForm.value); // only returns non-disabled fields, can get all with this.emailForm.getRawValue()
    this.emailSubmit.emit(this.emailForm.value);
  }
}
