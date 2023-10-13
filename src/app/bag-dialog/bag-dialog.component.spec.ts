import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagDialogComponent } from './bag-dialog.component';

describe('BagDialogComponent', () => {
  let component: BagDialogComponent;
  let fixture: ComponentFixture<BagDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BagDialogComponent]
    });
    fixture = TestBed.createComponent(BagDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
