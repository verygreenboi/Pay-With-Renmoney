import { Injectable }                  from '@angular/core';
import { WizardItem }                  from 'src/app/overlay/wizard.model';
import { BehaviorSubject, Observable } from 'rxjs';

const STEPS: WizardItem[] = [
  { stepIndex: 1, isComplete: false },
  { stepIndex: 2, isComplete: false },
  { stepIndex: 3, isComplete: false },
  { stepIndex: 4, isComplete: false },
  { stepIndex: 5, isComplete: false },
  { stepIndex: 6, isComplete: false },
];

@Injectable({
  providedIn: 'root'
})
export class WizardService {
  steps$: BehaviorSubject<WizardItem[]> = new BehaviorSubject<WizardItem[]>(STEPS);
  currentStep$: BehaviorSubject<WizardItem> = new BehaviorSubject<WizardItem>(null);
  canProceed: BehaviorSubject<boolean> = new BehaviorSubject(false);
  canProceed$ = this.canProceed.asObservable();
  wizardData: { [key: string]: any } = {};

  constructor() {
    this.currentStep$.next(this.steps$.value[0]);
  }

  setCurrentStep(step: WizardItem): void {
    this.currentStep$.next(step);
  }

  getCurrentStep(): Observable<WizardItem> {
    return this.currentStep$.asObservable();
  }

  getSteps(): Observable<WizardItem[]> {
    return this.steps$.asObservable();
  }

  moveToNextStep(i?: number): void {
    let index = this.currentStep$.value.stepIndex;
    if (i || i === 0) {
      index = i;
    }
    if (index < this.steps$.value.length) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }

  moveToPreviousStep(): void {
    const index = this.currentStep$.value.stepIndex - 2;
    if (index > -1) {
      this.currentStep$.next(this.steps$.value[index]);
    }
  }

  isLastStep(): boolean {
    return this.currentStep$.value.stepIndex === this.steps$.value.length;
  }

  isFirstStep(): boolean {
    return this.currentStep$.value.stepIndex === 1;
  }

  toggleCanProceed(status: boolean): void {
    this.canProceed.next(status);
  }

  addData(key: string, data: unknown): void {
    this.wizardData = {
      ...this.wizardData,
      [key]: data
    };
  }

  reset(): void {
    this.wizardData = {};
    this.moveToNextStep(0);
  }
}
