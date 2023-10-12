import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeDialogComponent } from './size-dialog.component';

describe('SizeDialogComponent', () => {
  let component: SizeDialogComponent;
  let fixture: ComponentFixture<SizeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SizeDialogComponent]
    });
    fixture = TestBed.createComponent(SizeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
