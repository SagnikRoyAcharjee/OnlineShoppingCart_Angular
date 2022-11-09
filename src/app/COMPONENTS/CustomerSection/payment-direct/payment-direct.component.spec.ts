import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDirectComponent } from './payment-direct.component';

describe('PaymentDirectComponent', () => {
  let component: PaymentDirectComponent;
  let fixture: ComponentFixture<PaymentDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
