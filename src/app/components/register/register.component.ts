import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { modAppUsuario } from 'src/app/class/modAppUsuario';
import { GestionUsuarioService } from 'src/app/services/gestion-usuario.service';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: GestionUsuarioService
  ) { }

  ngOnInit(): void {
    this.especificaValidaciones();
  }

  especificaValidaciones() {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get esInvalido() {
    return this.registerForm.invalid;
  }

  registerUser() {
    // TODO : Falta integrar el servicio para registrar al usuario
    // JSON simulando usuarios
    var userLogin : modAppUsuario = this.registerForm.value;
    this.usuarioService.registrarusuario(userLogin);
    //usersList.push(userLogin);
    //console.log('User Register -->', usersList);
    //this.router.navigate(['/principal/ships']);
  }
}