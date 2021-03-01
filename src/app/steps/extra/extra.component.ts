import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TuiDay }                             from '@taiga-ui/cdk';
import { WizardService }                      from 'src/app/overlay/wizard.service';
import { StepBaseComponent }                  from 'src/app/steps/step-base';

@Component({
  selector: 'rm-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent extends StepBaseComponent implements OnInit {

  minDate = new TuiDay(1956, 1, 28);
  maxDate = new TuiDay(2003, 1, 28);

  states = [
    'Abia',
    'Adamawa',
    'Akwa Ibom',
    'Anambra',
    'Bauchi',
    'Bayelsa',
    'Benue',
    'Borno',
    'Cross River',
    'Delta',
    'Ebonyi',
    'Edo',
    'Ekiti',
    'Enugu',
    'FCT - Abuja',
    'Gombe',
    'Imo',
    'Jigawa',
    'Kaduna',
    'Kano',
    'Katsina',
    'Kebbi',
    'Kogi',
    'Kwara',
    'Lagos',
    'Nasarawa',
    'Niger',
    'Ogun',
    'Ondo',
    'Osun',
    'Oyo',
    'Plateau',
    'Rivers',
    'Sokoto',
    'Taraba',
    'Yobe',
    'Zamfara'
  ];

  extraFormGroup: FormGroup;

  constructor(fb: FormBuilder, wizard: WizardService) {
    super(wizard);
    this.extraFormGroup = fb.group({
      gender: [undefined, [Validators.required]],
      dob: [undefined, [Validators.required]],
      state: [this.states[0], [Validators.required]],
      lga: [undefined, [Validators.required]],
      employmentStatus: [undefined, [Validators.required]],
    });
    this.key = 'extra';
    this.control = this.extraFormGroup;
  }
}
