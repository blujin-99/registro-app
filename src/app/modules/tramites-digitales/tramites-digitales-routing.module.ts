import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OficinaPresentacionComponent } from './pages/oficina-presentacion/oficina-presentacion.component';
import { TiposTramitesComponent } from './pages/tipos-tramites/tipos-tramites.component';
import { ParcialInhibicionesComponent } from './pages/parcial-inhibiciones/parcial-inhibiciones.component';

const routes: Routes = [
  {
    path: '',
    component: OficinaPresentacionComponent,
  },
  {
    path: ':oficina',
    component: TiposTramitesComponent,
  },
  {
    path: 'parcialInhibiciones',
    component: ParcialInhibicionesComponent,
  },
  {
    path: ':idTramite',
    component: ParcialInhibicionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TramitesDigitalesRoutingModule {}
