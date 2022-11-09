import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsDirectComponent } from './order-details-direct.component';

describe('OrderDetailsDirectComponent', () => {
  let component: OrderDetailsDirectComponent;
  let fixture: ComponentFixture<OrderDetailsDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsDirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailsDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
