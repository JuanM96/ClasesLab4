import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaspComponent } from './practicasp.component';

describe('PracticaspComponent', () => {
  let component: PracticaspComponent;
  let fixture: ComponentFixture<PracticaspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticaspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
