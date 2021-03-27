import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GestionUsuarioService } from './gestion-usuario.service';

describe('GestionUsuarioService', () => {
  let service: GestionUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        RouterTestingModule.withRoutes([])],
    });
    service = TestBed.inject(GestionUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
