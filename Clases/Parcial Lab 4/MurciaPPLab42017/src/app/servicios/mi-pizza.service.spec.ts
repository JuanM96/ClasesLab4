import { TestBed, inject } from '@angular/core/testing';

import { MiPizzaService } from './mi-pizza.service';

describe('MiPizzaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiPizzaService]
    });
  });

  it('should be created', inject([MiPizzaService], (service: MiPizzaService) => {
    expect(service).toBeTruthy();
  }));
});
