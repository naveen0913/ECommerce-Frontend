import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBagSnackbarComponent } from './add-bag-snackbar.component';

describe('AddBagSnackbarComponent', () => {
  let component: AddBagSnackbarComponent;
  let fixture: ComponentFixture<AddBagSnackbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBagSnackbarComponent]
    });
    fixture = TestBed.createComponent(AddBagSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
