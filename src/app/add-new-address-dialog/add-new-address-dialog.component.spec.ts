import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAddressDialogComponent } from './add-new-address-dialog.component';

describe('AddNewAddressDialogComponent', () => {
  let component: AddNewAddressDialogComponent;
  let fixture: ComponentFixture<AddNewAddressDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewAddressDialogComponent]
    });
    fixture = TestBed.createComponent(AddNewAddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
