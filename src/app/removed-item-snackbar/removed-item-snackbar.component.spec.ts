import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedItemSnackbarComponent } from './removed-item-snackbar.component';

describe('RemovedItemSnackbarComponent', () => {
  let component: RemovedItemSnackbarComponent;
  let fixture: ComponentFixture<RemovedItemSnackbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemovedItemSnackbarComponent]
    });
    fixture = TestBed.createComponent(RemovedItemSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
