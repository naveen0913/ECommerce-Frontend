import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBagSnackbar1Component } from './add-bag-snackbar1.component';

describe('AddBagSnackbar1Component', () => {
  let component: AddBagSnackbar1Component;
  let fixture: ComponentFixture<AddBagSnackbar1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBagSnackbar1Component]
    });
    fixture = TestBed.createComponent(AddBagSnackbar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
