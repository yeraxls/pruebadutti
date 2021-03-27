import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { GestionUsuarioService } from 'src/app/services/gestion-usuario.service';
import { ShipsComponent } from '../ships/ships.component';


import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  
  const serviceMock ={
    respuesta : false,
    iniciarSesion:function(){ return  this.respuesta}
    
  }

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[         
        FormsModule, 
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule],
        providers:[
        {provide: GestionUsuarioService, useValue: serviceMock},
        { provide: Router, useValue: mockRouter }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
   router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Inicia sesión fallido', () => {
    serviceMock.respuesta = true;
    component.loginForm.setValue({ username: "Yeray", password: "aaaaaaa"});
    component.loginUser();
    expect(component.unregistered).toBe(true);
  });

  it('Inicia sesión correcto', () => {
    component.loginForm.setValue({ username: "Yeray", password: "aaaaaaa"});
    component.loginUser();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/principal/ships'])
    expect(component.unregistered).toBe(false);
  });
  it('Es invalido', () => {
    component.loginForm.setValue({ username: "a", password: "aaaaaaa"});
    var valido = component.esInvalido;
    expect(valido).toBe(false);
  });
  it('Es invalido', () => {
    component.loginForm.setValue({ username: "aaaaa", password: "aaaaaaa"});
    var valido = component.esInvalido;
    expect(valido).toBe(true);
  });
});
