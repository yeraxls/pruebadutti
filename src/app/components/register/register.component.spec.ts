
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { GestionUsuarioService } from 'src/app/services/gestion-usuario.service';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  const serviceMock = {
    respuesta: false,
    registrarusuario: function (userLogin) { }

  }
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule],
      providers: [
        { provide: GestionUsuarioService, useValue: serviceMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('invalido', () => {
    component.registerForm.setValue(
      {
        first_name: "aaaaaa",
        last_name: "aaaaaa",
        username: "aa",
        email: "aaaaaa",
        password: "aaaaaa"
      });
    var invalido = component.esInvalido;
    expect(invalido).toBe(true);
  });
  it('valido', () => {
    component.registerForm.setValue(
      {
        first_name: "aaaaaa",
        last_name: "aaaaaa",
        username: "aaaaaaaa",
        email: "aaaaaa",
        password: "aaaaaa"
      });
    var invalido = component.esInvalido;
    expect(invalido).toBe(false);
  });

  it('registrarse', () => {
    component.registerForm.setValue(
      {
        first_name: "aaaaaa",
        last_name: "aaaaaa",
        username: "aaaaaa",
        email: "aaaaaa",
        password: "aaaaaa"
      });
    component.registerUser();
  });
});
