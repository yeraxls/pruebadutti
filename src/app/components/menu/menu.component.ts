import { Component, OnInit } from '@angular/core';
import { GestionUsuarioService } from 'src/app/services/gestion-usuario.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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
