import { NgModule, Type }      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { WelcomeComponent }    from './welcome/welcome.component';
import { BvnComponent }        from './bvn/bvn.component';
import { PersonalComponent }   from './personal/personal.component';
import { ExtraComponent }      from './extra/extra.component';
import { AddressComponent }    from './address/address.component';
import { EmploymentComponent } from './employment/employment.component';
import { TuiSharedModule }     from './tui-shared.module';

const components: Type<any>[] = [
  WelcomeComponent,
  BvnComponent,
  PersonalComponent,
  ExtraComponent,
  AddressComponent,
  EmploymentComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    TuiSharedModule
  ]
})
export class StepsModule { }
