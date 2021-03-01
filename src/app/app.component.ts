import { Component, EventEmitter, Output } from '@angular/core';
import { PayBtnService }                   from 'src/app/pay-btn.service';
import { WizardService }                   from 'src/app/overlay/wizard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pay-with-renmoney-btn';
  overlayStatus = this.service.isOverlayVisible;
  overlayStatus$ = this.service.showOverlay$;

  // tslint:disable-next-line:no-output-rename
  @Output('payment-data') paymentData = new EventEmitter<any>();

  constructor(private service: PayBtnService, private wizard: WizardService) {
  }

  toggleOverlay(state: boolean): void {
    this.service.toggleOverlay(state);
    if (!state) {
      this.wizard.reset();
    }
  }

}
