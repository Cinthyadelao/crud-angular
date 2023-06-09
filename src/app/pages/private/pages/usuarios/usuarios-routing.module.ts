import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

const routes: Routes = [
  {
    path: '', component: UsuariosComponent, children: [
      {
        path: 'lista-usuarios', component: ListaUsuariosComponent
      },
      {
        path: 'crear-usuario', component: CrearUsuarioComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
