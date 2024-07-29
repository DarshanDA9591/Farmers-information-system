import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpricedetailsComponent } from './viewpricedetails.component';

describe('ViewpricedetailsComponent', () => {
  let component: ViewpricedetailsComponent;
  let fixture: ComponentFixture<ViewpricedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpricedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpricedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
