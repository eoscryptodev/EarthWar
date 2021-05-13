import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworldDialogComponent } from './homeworld-dialog.component';

describe('HomeworldDialogComponent', () => {
  let component: HomeworldDialogComponent;
  let fixture: ComponentFixture<HomeworldDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworldDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworldDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
