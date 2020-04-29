import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AsesoresPage } from './asesores.page';
import { PerfilPage} from './perfil/perfil.page';
const routes: Routes = [
  {
    path: '',
    component: AsesoresPage
  },
  {
    path: '/perfil',
    component: PerfilPage
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AsesoresPage,PerfilPage]
})
export class AsesoresPageModule {}
