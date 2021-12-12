import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesUiFiveColComponent } from './categories-ui-five-col.component';

describe('CategoriesUiFiveColComponent', () => {
  let component: CategoriesUiFiveColComponent;
  let fixture: ComponentFixture<CategoriesUiFiveColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesUiFiveColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesUiFiveColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
