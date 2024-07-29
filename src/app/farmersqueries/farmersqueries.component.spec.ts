import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersqueriesComponent } from './farmersqueries.component';

describe('FarmersqueriesComponent', () => {
  let component: FarmersqueriesComponent;
  let fixture: ComponentFixture<FarmersqueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmersqueriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmersqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
