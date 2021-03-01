import { Component, OnInit }       from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TuiInputMode }            from '@taiga-ui/cdk';
import { WizardService }           from 'src/app/overlay/wizard.service';
import { StepBaseComponent }       from '../step-base';

@Component({
  selector: 'rm-bvn',
  templateUrl: './bvn.component.html',
  styleUrls: ['./bvn.component.scss']
})
export class BvnComponent extends StepBaseComponent implements OnInit {
  inputMode = TuiInputMode.Numeric;
  bvnControl: FormControl = new FormControl(
    undefined,
    [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
      (control: FormControl) => {
        const value = +control.value;
        if (!Number.isNaN(value)) {
          return null;
        } else {
          return {
            numericError: true
          };
        }
      }
    ]
  );

  constructor(wizardService: WizardService) {
    super(wizardService);
    this.control = this.bvnControl;
    this.key = 'bvn';
  }

}
