import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import usersList from 'src/assets/json/users.json';
import { modAppUsuario } from '../class/modAppUsuario';
@Injectable({
  providedIn: 'root'
})
export class GestionUsuarioService {
  users: modAppUsuario[] = usersList;
  constructor(private router: Router) { }

  recuperarUsuario(): modAppUsuario {
    return JSON.parse(localStorage.getItem("usuario"));
  }

  registrarusuario(usuario: modAppUsuario) {
    this.almacenarUsuario(usuario);
    this.users.push(usuario);
    console.log('User Register -->', this.users);
    this.router.navigate(['/principal/ships']);
  }
  private almacenarUsuario(usuario: modAppUsuario) {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }
  cerrarSesion() {
    return localStorage.removeItem("usuario");
    this.router.navigate(['']);
  }

  iniciarSesion(userLogin: modAppUsuario) {
    var filterJson = this.users.filter(user => { return user.username == userLogin.username && user.password == userLogin.password });
    if (filterJson.length > 0) {
      this.almacenarUsuario(filterJson[0]);
      return true;
    }
    return false;

  }
}
