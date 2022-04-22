import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntualiComponent } from './puntuali.component';

describe('PuntualiComponent', () => {
  let component: PuntualiComponent;
  let fixture: ComponentFixture<PuntualiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntualiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntualiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
