import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoTramitePageComponent } from './pages/nuevo-tramite-page/nuevo-tramite-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: NuevoTramitePageComponent },
      {
        path: '**',
        redirectTo: 'tramite',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoTramiteRoutingModule {}
