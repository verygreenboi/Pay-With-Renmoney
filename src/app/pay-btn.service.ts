import { Injectable }                  from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map }                         from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PayBtnService {
  private showOverlaySubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  showOverlay$: Observable<'show' | 'hide'> = this.showOverlaySubject.asObservable().pipe(
    map(status => status ? 'show' : 'hide')
  );

  constructor() {
  }

  get isOverlayVisible(): boolean {
    return this.showOverlaySubject.getValue();
  }

  toggleOverlay(state: boolean = false): void {
    this.showOverlaySubject.next(state);
  }
}
