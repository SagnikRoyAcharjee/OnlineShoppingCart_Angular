import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductInfoComponent } from './view-product-info.component';

describe('ViewProductInfoComponent', () => {
  let component: ViewProductInfoComponent;
  let fixture: ComponentFixture<ViewProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
