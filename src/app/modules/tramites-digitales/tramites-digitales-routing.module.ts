import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OficinaPresentacionComponent } from './pages/oficina-presentacion/oficina-presentacion.component';
import { TiposTramitesComponent } from './pages/tipos-tramites/tipos-tramites.component';
import { ParcialInhibicionesComponent } from './parcial-inhibiciones/pages/parcial-inhibiciones/parcial-inhibiciones.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: OficinaPresentacionComponent },
      {
        path: 'oficina/:oficina',
        component: TiposTramitesComponent,
      },
      {
        path: 'oficina/:oficina/parcialInhibiciones',
        component:ParcialInhibicionesComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TramitesDigitalesRoutingModule {}
