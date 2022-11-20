import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOrderDirectComponent } from './place-order-direct.component';

describe('PlaceOrderDirectComponent', () => {
  let component: PlaceOrderDirectComponent;
  let fixture: ComponentFixture<PlaceOrderDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceOrderDirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceOrderDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
