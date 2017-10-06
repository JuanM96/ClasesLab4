import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasListadoComponent } from './pizzas-listado.component';

describe('PizzasListadoComponent', () => {
  let component: PizzasListadoComponent;
  let fixture: ComponentFixture<PizzasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
