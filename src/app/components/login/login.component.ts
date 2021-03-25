import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { modAppUsuario } from 'src/app/class/modAppUsuario';
import { GestionUsuarioService } from 'src/app/services/gestion-usuario.service';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: modAppUsuario[] = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService : GestionUsuarioService
  ) { }

  ngOnInit(): void {
    this.especificaValidaciones();
  }

  especificaValidaciones() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get esInvalido() {
    return this.loginForm.invalid;
  }

  loginUser() {
    // TODO : Falta integrar el servicio para autentificar al usuario
    // JSON simulando usuarios
    var userLogin = this.loginForm.value;
    var respuesta = this.usuarioService.iniciarSesion(userLogin);
    if (respuesta)
      this.router.navigate(['/principal/ships']);
    else
      this.unregistered = true;
  }
}

