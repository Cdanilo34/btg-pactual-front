import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialTransaccionesComponent } from './historial-transacciones.component';

describe('HistorialTransaccionesComponent', () => {
  let component: HistorialTransaccionesComponent;
  let fixture: ComponentFixture<HistorialTransaccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialTransaccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
