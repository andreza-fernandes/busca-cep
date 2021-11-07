import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Usuario } from './../../classes/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
	private _usuarios: Usuario[] = [];

	constructor(private http: HttpClient) { }

	public getUsuarios(_data: any = {}) {
		_data = _data || {};
		let callback = _data.callback || null,
			error = _data.error ||null,
			afterCallback = _data.afterCallback ||null,
			urlUsuarios: string = `https://next.json-generator.com/api/json/get/VJ6-fYXwI`;

		try{
			if(this._usuarios.length === 0){
				this.http.get(urlUsuarios)
					.subscribe((dados: Usuario[]) => {
						this._usuarios = dados;

						if(callback){
							if(typeof(callback) == 'function'){
								callback(this._usuarios);
							}
						}
					});
			}
			else{
				callback(this._usuarios);
			}
		}
		catch(ex){
			this.handleError(error, ex.message);
		}
		finally {
			if(afterCallback){
				if(typeof(afterCallback) === 'function'){
					afterCallback(_data);
				}
			}
		}
	}

	private handleError(error: Function, errorMsg: string, idNivelAlerta: number = 0){
		if(error){
			if(typeof(error) == 'function'){
				error(errorMsg, idNivelAlerta);
			}
		}
	}
}