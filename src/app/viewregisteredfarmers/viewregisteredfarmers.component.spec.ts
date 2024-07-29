import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregisteredfarmersComponent } from './viewregisteredfarmers.component';

describe('ViewregisteredfarmersComponent', () => {
  let component: ViewregisteredfarmersComponent;
  let fixture: ComponentFixture<ViewregisteredfarmersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewregisteredfarmersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewregisteredfarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
