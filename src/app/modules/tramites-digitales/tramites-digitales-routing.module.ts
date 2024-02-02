import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OficinaPresentacionComponent } from './pages/oficina-presentacion/oficina-presentacion.component';
import { TiposTramitesComponent } from './pages/tipos-tramites/tipos-tramites.component';
import { ParcialInhibicionesComponent } from './pages/parcial-inhibiciones/parcial-inhibiciones.component';
import { SeleccionFolioPageComponent } from './pages/seleccion-folio-page/seleccion-folio-page.component';

const routes: Routes = [
  {
    path: '',
    component: OficinaPresentacionComponent,
  },
  {
    path: ':oficina',

    children: [
      {
        path: '',
        component: TiposTramitesComponent,
      },
      {
        path: ':acto/inhibiciones',
        component: ParcialInhibicionesComponent,
      },
      {
        path: ':acto/inhibiciones/:idTramite',
        component: ParcialInhibicionesComponent,
      },
      {
        path: ':acto/:tipoTramite',
        component: SeleccionFolioPageComponent,
      },
      {
        path: ':acto/:tipoTramite/:folio',
        component: SeleccionFolioPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TramitesDigitalesRoutingModule {}
