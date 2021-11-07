import { Component, OnInit } from '@angular/core';

import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/classes/Usuario';

@Component({
	selector: 'app-lista-usuarios',
	templateUrl: './lista-usuarios.component.html',
	styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
	listaUsuarios: Usuario[] = [];

	constructor(private _usuariosService: UsuariosService) {
		this._usuariosService.getUsuarios({
			callback: (dados: Usuario[]) => {
				this.listaUsuarios = dados;
				console.log(dados);
			},
			error: (errorMsg: string, idNivelAlerta: number) => {
				switch (idNivelAlerta) {
					case 1:
						alert(errorMsg);
						break;

					default:
						console.log(errorMsg);
						break;
				}
			}
		});
	}
}