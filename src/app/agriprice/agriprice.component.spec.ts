import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgripriceComponent } from './agriprice.component';

describe('AgripriceComponent', () => {
  let component: AgripriceComponent;
  let fixture: ComponentFixture<AgripriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgripriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgripriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
