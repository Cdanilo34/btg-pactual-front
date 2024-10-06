import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosDisponiblesComponent } from './fondos-disponibles.component';

describe('FondosDisponiblesComponent', () => {
  let component: FondosDisponiblesComponent;
  let fixture: ComponentFixture<FondosDisponiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondosDisponiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
