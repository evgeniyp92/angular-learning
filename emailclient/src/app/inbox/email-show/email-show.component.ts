import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { switchMap } from 'rxjs';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css',
})
export class EmailShowComponent {
  uid = '';
  email: Email | null = null;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {}

  // Observables emit values whenever some specific part of the URL changes
  // Snapshots are simple descriptions of what the URL is right now, but it never updates after the first run

  // NB using debug console you can quickly see what is subscribeable and not --
  // look for BehaviorSubjects, Subjects etc

  ngOnInit() {
    // this.route.params.subscribe((snapshot) => {
    // this.uid = snapshot['id'];
    // you should avoid nesting subscribes, creates risk of out-of-order execution
    // this.emailService.getEmail(this.uid).subscribe((email) => {
    //   console.log(email);
    // });
    // });
    // this.uid = this.route.snapshot.params['id']; // getting it from snapshot

    // instead of nesting subscribes, pipe into a switchMap and return the
    // Observable from the switchMap, then subscribe to the returned observable
    // and use the result
    this.route.params
      .pipe(
        switchMap(({ id }) => {
          this.uid = id;
          return this.emailService.getEmail(id);
        })
      )
      .subscribe((email) => {
        console.log(email);
        this.email = email;
      });
  }
}

/**
 * For the benifit of the next generations studying this course - a little piece
   of information about the switchMap operator (from
   https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap):

The main difference between switchMap and other flattening operators is the
cancelling effect. On each emission the previous inner observable (the result of
the function you supplied) is cancelled and the new observable is subscribed.
You can remember this by the phrase switch to a new observable.

This works perfectly for scenarios like typeaheads where you are no longer
concerned with the response of the previous request when a new input arrives.
This also is a safe option in situations where a long lived inner observable
could cause memory leaks, for instance if you used mergeMap with an interval and
forgot to properly dispose of inner subscriptions. Remember, switchMap maintains
only one inner subscription at a time, this can be seen clearly in the first
example.

Be careful though, you probably want to avoid switchMap in scenarios where every
request needs to complete, think writes to a database. switchMap could cancel a
request if the source emits quickly enough. In these scenarios mergeMap is the
correct option.
 */
