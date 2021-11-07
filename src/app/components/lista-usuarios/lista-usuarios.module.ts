import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaUsuariosComponent } from './lista-usuarios.component';
import { UsuariosService } from 'src/app/services/usuarios.service';


@NgModule({
  declarations: [
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
	UsuariosService
  ]
})
export class ListaUsuariosModule { }
