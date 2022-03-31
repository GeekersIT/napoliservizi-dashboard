import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivelliComponent } from './livelli.component';

describe('LivelliComponent', () => {
  let component: LivelliComponent;
  let fixture: ComponentFixture<LivelliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivelliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivelliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
