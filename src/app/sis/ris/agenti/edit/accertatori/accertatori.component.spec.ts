import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccertatoriComponent } from './accertatori.component';

describe('AccertatoriComponent', () => {
  let component: AccertatoriComponent;
  let fixture: ComponentFixture<AccertatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccertatoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccertatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
