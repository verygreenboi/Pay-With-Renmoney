import { Component, OnDestroy, OnInit } from '@angular/core';
import { WizardService }    from 'src/app/overlay/wizard.service';
import { of, Subscription } from 'rxjs';
import { catchError, tap }  from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';

@Component({
  template: ''
})
export abstract class StepBaseComponent implements OnInit, OnDestroy {
  control: AbstractControl;
  sub: Subscription;
  key: string;
  protected constructor(private wizardService: WizardService) {
    wizardService.toggleCanProceed(false);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  ngOnInit(): void {
    if (this.wizardService.wizardData[this.key]) {
      this.control.setValue(this.wizardService.wizardData[this.key], {emit: false});
      this.wizardService.toggleCanProceed(this.control.valid);
    }
    this.sub = this.control.valueChanges.pipe(
      tap(value => {
        this.wizardService.addData(this.key, value);
        this.wizardService.toggleCanProceed(this.control.valid);
      }),
      catchError(err => {
        console.log(err);
        return of(undefined);
      })
    ).subscribe();
  }
}
