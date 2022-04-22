import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobaliComponent } from './globali.component';

describe('GlobaliComponent', () => {
  let component: GlobaliComponent;
  let fixture: ComponentFixture<GlobaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
