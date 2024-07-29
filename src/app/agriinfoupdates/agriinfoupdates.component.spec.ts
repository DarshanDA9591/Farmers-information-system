import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriinfoupdatesComponent } from './agriinfoupdates.component';

describe('AgriinfoupdatesComponent', () => {
  let component: AgriinfoupdatesComponent;
  let fixture: ComponentFixture<AgriinfoupdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriinfoupdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriinfoupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
