import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostquerytostaffComponent } from './postquerytostaff.component';

describe('PostquerytostaffComponent', () => {
  let component: PostquerytostaffComponent;
  let fixture: ComponentFixture<PostquerytostaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostquerytostaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostquerytostaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
