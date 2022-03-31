import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocollatiComponent } from './protocollati.component';

describe('ProtocollatiComponent', () => {
  let component: ProtocollatiComponent;
  let fixture: ComponentFixture<ProtocollatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocollatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocollatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
