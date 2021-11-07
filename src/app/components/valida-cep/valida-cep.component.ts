import { Component, OnInit, ElementRef } from '@angular/core';

import { Usuario } from './../../../classes/Usuario';
import { Endereco } from 'src/classes/Endereco';
import { EnderecoService } from 'src/app/services/endereco.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-valida-cep',
	templateUrl: './valida-cep.component.html',
	styleUrls: ['./valida-cep.component.css']
})

export class ValidaCepComponent {
	private usuario: Usuario;
	private buscandoCEP: boolean = false;

	constructor(
		private _enderecoService: EnderecoService,
		private _elementRef: ElementRef
	) {
		this.usuario = new Usuario();
		this.usuario.endereco = new Endereco();
	}

	buscarCEP(cep: string, formulario: NgForm) {
		this.buscandoCEP = true;
		debugger

		this._enderecoService.getConsultaCEP({
			cep: cep,
			callback: (dados: Endereco) => {
				this.preencherDadosEndereco(dados, formulario);
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
			},
			afterCallback: () => {
				this.buscandoCEP = false;
			}
		});
	}

	preencherDadosEndereco(dados: Endereco, formulario: NgForm) {
		formulario.form.patchValue({
			logradouro: dados.logradouro,
			bairro: dados.bairro,
			cidade: dados.cidade,
			estado: dados.estado
		});
	}

	onValidForm(formulario: NgForm, isClear: boolean = false) {
		if (formulario.invalid) {
			let allElements = this._elementRef.nativeElement.querySelectorAll('.ng-invalid'),
				inputs = this._elementRef.nativeElement.querySelectorAll('input.ng-invalid');
			if (inputs) {
				if (isClear) {
					allElements.forEach(element => {
						element.classList.remove('ng-untouched');
						element.classList.remove('ng-touched');
					});
				}
				else {
					inputs.forEach(element => {
						element.classList.add('ng-touched');
						element.classList.remove('ng-untouched');
					});
				}
			}
			return false;
		}
		return true;
	}

	onSubmit(formulario: NgForm) {
		return this.onValidForm(formulario);
	}

	onClearSubmit(formulario: NgForm) {
		formulario.form.reset();
		this.onValidForm(formulario, true);
	}
}
