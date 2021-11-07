import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Endereco } from 'src/classes/Endereco';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class EnderecoService {
	constructor(private http: HttpClient) { }

	public getConsultaCEP(_data: any = {}) {
		_data = _data || {};
		let callback = _data.callback || null,
			error = _data.error ||null,
			afterCallback = _data.afterCallback ||null,
			cep = _data.cep || '',
			urlBuscaCEP: string = `https://viacep.com.br/ws/${cep}/json`;

		try{
			// Expressão regular para validar o CEP.
			const validacep = /^[0-9]{8}|([0-9]{5})+\-([0-9]{3})+$/;

			// Valida o formato do CEP.
			if (validacep.test(cep)) {
				this.http.get(urlBuscaCEP)
					.subscribe((dados: Endereco) => {
						if(callback){
							if(typeof(callback) == 'function'){
								callback(<Endereco>{
									cep: dados['cep'],
									logradouro: dados['logradouro'],
									bairro: dados['bairro'],
									cidade: dados['localidade'],
									estado: dados['uf']
								});
							}
						}
					});
			}
			else{
				this.handleError(error, 'CEP Inválido', 1);
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
