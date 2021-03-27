import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { GestionUsuarioService } from 'src/app/services/gestion-usuario.service';
import { LoginComponent } from '../login/login.component';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  const serviceMock ={
    recuperarUsuario:function(){ return  {}},
    cerrarSesion:function(){}
    
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [RouterTestingModule.withRoutes([])],
      providers:[{provide: GestionUsuarioService, useValue: serviceMock} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
