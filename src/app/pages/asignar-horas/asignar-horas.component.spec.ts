import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarHorasComponent } from './asignar-horas.component';

describe('AsignarHorasComponent', () => {
  let component: AsignarHorasComponent;
  let fixture: ComponentFixture<AsignarHorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarHorasComponent]
    });
    fixture = TestBed.createComponent(AsignarHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
