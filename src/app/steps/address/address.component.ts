import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WizardService }                      from 'src/app/overlay/wizard.service';
import { StepBaseComponent }                  from '../step-base';

@Component({
  selector: 'rm-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent extends StepBaseComponent implements OnInit {

  addressFormGroup: FormGroup;
  education = [
    'Primary',
    'Secondary',
    'Graduate'
  ];

  constructor(fb: FormBuilder, wizardService: WizardService) {
    super(wizardService);
    this.addressFormGroup = fb.group({
      residentialStatus: [undefined, Validators.required],
      address: [undefined, Validators.required],
      dateMovedIn: [undefined, Validators.required],
      maritalStatus: [undefined, Validators.required],
      levelOfEducation: [this.education[0], Validators.required]
    });
    this.control = this.addressFormGroup;
    this.key = 'address';
  }

}
