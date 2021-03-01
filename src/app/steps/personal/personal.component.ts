import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { phoneValidation }                    from 'src/app/phone-validation';
import { TuiInputType }                       from '@taiga-ui/cdk';
import { StepBaseComponent }                  from 'src/app/steps/step-base';
import { WizardService }                      from 'src/app/overlay/wizard.service';

@Component({
  selector: 'rm-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent extends StepBaseComponent implements OnInit {
  personalFormGroup: FormGroup;
  emailInput = TuiInputType.Email;
  phoneInput = TuiInputType.Tel;
  constructor(fb: FormBuilder, wizard: WizardService) {
    super(wizard);
    this.personalFormGroup = fb.group({
      firstName: [undefined, [Validators.required]],
      middleName: [undefined],
      lastName: [undefined, [Validators.required]],
      email: [undefined, [Validators.required, Validators.email]],
      phone: [undefined, [Validators.required, ...phoneValidation]]
    });
    this.key = 'personal';
    this.control = this.personalFormGroup;
  }
}
