import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestaffprofileComponent } from './updatestaffprofile.component';

describe('UpdatestaffprofileComponent', () => {
  let component: UpdatestaffprofileComponent;
  let fixture: ComponentFixture<UpdatestaffprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestaffprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatestaffprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
