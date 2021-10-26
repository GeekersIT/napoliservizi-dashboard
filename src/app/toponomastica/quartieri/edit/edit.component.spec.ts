import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalitaEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: MunicipalitaEditComponent;
  let fixture: ComponentFixture<MunicipalitaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipalitaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalitaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
