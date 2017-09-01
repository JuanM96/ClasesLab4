import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocidadArimeticaComponent } from './velocidad-arimetica.component';

describe('VelocidadArimeticaComponent', () => {
  let component: VelocidadArimeticaComponent;
  let fixture: ComponentFixture<VelocidadArimeticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelocidadArimeticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelocidadArimeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
