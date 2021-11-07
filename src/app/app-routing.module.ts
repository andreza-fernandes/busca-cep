import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidaCepComponent } from './components/valida-cep/valida-cep.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {
    path: 'cep',
    component: ValidaCepComponent
  },
  {
    path: 'usuario',
    component: ListaUsuariosComponent
  },
  {
    path: '',
    redirectTo: 'usuario',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
