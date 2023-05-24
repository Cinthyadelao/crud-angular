import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperarContrasenaRoutingModule } from './recuperar-contrasena-routing.module';
import { RecuperarContrasenaComponent } from './recuperar-contrasena.component';


@NgModule({
  declarations: [
    RecuperarContrasenaComponent
  ],
  imports: [
    CommonModule,
    RecuperarContrasenaRoutingModule
  ]
})
export class RecuperarContrasenaModule { }
