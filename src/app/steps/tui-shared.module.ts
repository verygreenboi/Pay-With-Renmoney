import { NgModule }                          from '@angular/core';
import { CommonModule }                      from '@angular/common';
import {
  TuiDataListWrapperModule, TuiFieldErrorModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPhoneModule, TuiRadioBlockModule,
  TuiRadioLabeledModule,
  TuiSelectModule, TuiUnfinishedValidatorModule
} from '@taiga-ui/kit';
import { TuiDataListModule, TuiGroupModule, TuiHintControllerModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { ReactiveFormsModule }                                                                      from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TuiInputModule,
    TuiInputDateModule,
    TuiInputPhoneModule,
    TuiRadioLabeledModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiGroupModule,
    ReactiveFormsModule,
    TuiHintControllerModule,
    TuiTextfieldControllerModule,
    TuiFieldErrorModule,
    TuiRadioBlockModule,
    TuiUnfinishedValidatorModule
  ],
  exports: [
    TuiInputModule,
    TuiInputDateModule,
    TuiInputPhoneModule,
    TuiRadioLabeledModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiGroupModule,
    ReactiveFormsModule,
    TuiHintControllerModule,
    TuiTextfieldControllerModule,
    TuiFieldErrorModule,
    TuiRadioBlockModule,
    TuiUnfinishedValidatorModule
  ]
})
export class TuiSharedModule { }
