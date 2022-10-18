import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDirectComponent } from './checkout-direct.component';

describe('CheckoutDirectComponent', () => {
  let component: CheckoutDirectComponent;
  let fixture: ComponentFixture<CheckoutDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutDirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
