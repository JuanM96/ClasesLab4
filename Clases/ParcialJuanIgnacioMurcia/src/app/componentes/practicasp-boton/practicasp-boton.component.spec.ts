import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaspBotonComponent } from './practicasp-boton.component';

describe('PracticaspBotonComponent', () => {
  let component: PracticaspBotonComponent;
  let fixture: ComponentFixture<PracticaspBotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticaspBotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticaspBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
