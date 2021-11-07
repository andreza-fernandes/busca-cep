import { Endereco } from './Endereco';

class Nome {
	primeiro: string
	sobrenome: string
}

class UsuarioNome extends Nome {
	nome: Nome
}

class Amigo extends UsuarioNome {
	id: number
}

export class Usuario extends UsuarioNome {
	id: string
	index: number
	guid: string
	ativo: boolean
	empresa: string
	email: string
	fone: string
	endereco: Endereco
	sobre: string
	registro: string
	amigos: Amigo[]
	preferencia: any = {}
}