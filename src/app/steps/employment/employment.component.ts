import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepBaseComponent }                  from '../step-base';
import { WizardService }                      from 'src/app/overlay/wizard.service';

@Component({
  selector: 'rm-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent extends StepBaseComponent implements OnInit {
  employmentFormGroup: FormGroup;
  sectors = [
    'Banking',
    'Charity',
    'Finance',
  ];
  constructor(fb: FormBuilder, wizardService: WizardService) {
    super(wizardService);
    this.employmentFormGroup = fb.group({
      employer: [undefined, Validators.required],
      employerSector: [this.sectors[0], Validators.required],
      employmentStartDate: [undefined, Validators.required],
      officeAddress: [undefined, Validators.required],
      workEmail: [undefined, [Validators.required, Validators.email]],
    });
    this.key = 'employment';
    this.control = this.employmentFormGroup;
  }

}
