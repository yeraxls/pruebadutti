import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsDetailsDialogComponent } from './ships-details-dialog.component';

describe('ShipsDetailsDialogComponent', () => {
  let component: ShipsDetailsDialogComponent;
  let fixture: ComponentFixture<ShipsDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipsDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
