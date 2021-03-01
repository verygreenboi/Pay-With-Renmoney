import { TestBed } from '@angular/core/testing';

import { PayBtnService } from './pay-btn.service';

describe('PayBtnService', () => {
  let service: PayBtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayBtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
