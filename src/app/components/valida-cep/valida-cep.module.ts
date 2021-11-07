import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ValidaCepComponent } from './valida-cep.component';
import { EnderecoService } from 'src/app/services/endereco.service';

@NgModule({
  declarations: [
    ValidaCepComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
	EnderecoService
  ]
})
export class ValidaCepModule { }
