import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploDirectivasComponent } from './ejemplo-directivas.component';

describe('EjemploDirectivasComponent', () => {
  let component: EjemploDirectivasComponent;
  let fixture: ComponentFixture<EjemploDirectivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploDirectivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploDirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
