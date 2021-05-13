import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesDialogComponent } from './species-dialog.component';

describe('SpeciesDialogComponent', () => {
  let component: SpeciesDialogComponent;
  let fixture: ComponentFixture<SpeciesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
