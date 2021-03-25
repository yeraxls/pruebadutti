import { Component, OnInit } from '@angular/core';
import { GestionUsuarioService } from 'src/app/services/gestion-usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private usuarioService: GestionUsuarioService) { }

  ngOnInit(): void {
  }

  get conectado(){
    return this.usuarioService.recuperarUsuario();
  }
  cerrarSesion(){
    this.usuarioService.cerrarSesion();
  }

}
