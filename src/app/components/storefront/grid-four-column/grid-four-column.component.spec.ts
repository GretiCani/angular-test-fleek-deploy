import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFourColumnComponent } from './grid-four-column.component';

describe('GridFourColumnComponent', () => {
  let component: GridFourColumnComponent;
  let fixture: ComponentFixture<GridFourColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridFourColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFourColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
