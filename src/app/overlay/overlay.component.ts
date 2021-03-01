import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { PayBtnService }                           from 'src/app/pay-btn.service';
import { WizardService }                   from 'src/app/overlay/wizard.service';
import { Observable }                      from 'rxjs';
import { WizardItem }                      from 'src/app/overlay/wizard.model';

@Component({
  selector: 'rm-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  currentStep$: Observable<WizardItem>;
  canProceed$: Observable<boolean> = this.wizardService.canProceed$;
  @Output() data = new EventEmitter<any>();

  constructor(
    private service: PayBtnService,
    private wizardService: WizardService
  ) {
  }

  @HostListener('click', ['$event'])
  onClick(event): void {
    const element = event.target as HTMLElement;
    if (element.classList.contains('__container')) {
      this.service.toggleOverlay();
      this.wizardService.reset();
    }
  }

  ngOnInit(): void {
    this.currentStep$ = this.wizardService.getCurrentStep();
  }

  showPreviousButton(): boolean {
    return !this.wizardService.isFirstStep();
  }

  showNextButton(): boolean {
    return !this.wizardService.isFirstStep() && !this.wizardService.isLastStep();
  }

  showSubmitButton(): boolean {
    return this.wizardService.isLastStep();
  }

  proceed(): void {
    this.wizardService.moveToNextStep();
  }

  previous(): void {
    this.wizardService.moveToPreviousStep();
  }

  submit(): void {
    this.data.emit(this.wizardService.wizardData);
  }
}
