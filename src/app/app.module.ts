import { BrowserModule }                                                                            from '@angular/platform-browser';
import { Injector, NgModule }                                                                       from '@angular/core';
import { iconsPathFactory, TUI_ICONS_PATH, TuiDialogModule, TuiNotificationsModule, TuiRootModule } from '@taiga-ui/core';
import { AppComponent }                                                                             from './app.component';
import { OverlayComponent }                                                                         from './overlay/overlay.component';
import { PayButtonComponent }                                                                       from './pay-button/pay-button.component';
import { createCustomElement }                                                                      from '@angular/elements';
import { StepsModule }                                                                              from './steps/steps.module';

@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    PayButtonComponent
  ],
  imports: [
    BrowserModule,
    StepsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiNotificationsModule
  ],
  providers: [
    {
      provide: TUI_ICONS_PATH,
      useValue: iconsPathFactory('assets/taiga-ui/icons/'),
    }
  ],
  entryComponents: [
    AppComponent,
    OverlayComponent,
    PayButtonComponent
  ],
})
export class AppModule {
  constructor(private injector: Injector) {
    const rootComponent = createCustomElement(AppComponent, { injector });
    customElements.define('rm-pay-btn', rootComponent);
  }

  ngDoBootstrap(): void {
  }
}
