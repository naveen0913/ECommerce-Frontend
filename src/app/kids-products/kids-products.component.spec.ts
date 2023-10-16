import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsProductsComponent } from './kids-products.component';

describe('KidsProductsComponent', () => {
  let component: KidsProductsComponent;
  let fixture: ComponentFixture<KidsProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidsProductsComponent]
    });
    fixture = TestBed.createComponent(KidsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
