import { Component, OnInit } from '@angular/core';
import { WizardService }     from 'src/app/overlay/wizard.service';

@Component({
  selector: 'rm-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private wizardService: WizardService) {
  }

  ngOnInit(): void {
    this.wizardService.toggleCanProceed(true);
  }

  proceed(): void {
    this.wizardService.moveToNextStep();
  }

}
