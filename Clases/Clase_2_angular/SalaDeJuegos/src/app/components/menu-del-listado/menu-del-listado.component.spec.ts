import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDelListadoComponent } from './menu-del-listado.component';

describe('MenuDelListadoComponent', () => {
  let component: MenuDelListadoComponent;
  let fixture: ComponentFixture<MenuDelListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDelListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDelListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
