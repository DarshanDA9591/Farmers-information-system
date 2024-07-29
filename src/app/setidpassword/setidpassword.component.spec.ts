import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetidpasswordComponent } from './setidpassword.component';

describe('SetidpasswordComponent', () => {
  let component: SetidpasswordComponent;
  let fixture: ComponentFixture<SetidpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetidpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetidpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
