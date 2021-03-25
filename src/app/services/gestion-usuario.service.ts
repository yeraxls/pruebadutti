import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import usersList from 'src/assets/json/users.json';
import { modAppUsuario } from '../class/modAppUsuario';
@Injectable({
  providedIn: 'root'
})
export class GestionUsuarioService {

  constructor(private router: Router) { }

  recuperarUsuario(): modAppUsuario{
    return JSON.parse(localStorage.getItem("usuario"));
  }

  registrarusuario(usuario : modAppUsuario) {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    usersList.push(usuario);
    console.log('User Register -->', usersList);
    this.router.navigate(['/principal/ships']);
  }

  cerrarSesion(){
    return localStorage.removeItem("usuario");
    this.router.navigate(['']);
  }
}
