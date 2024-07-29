import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewagriinfoComponent } from './viewagriinfo.component';

describe('ViewagriinfoComponent', () => {
  let component: ViewagriinfoComponent;
  let fixture: ComponentFixture<ViewagriinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewagriinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewagriinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
