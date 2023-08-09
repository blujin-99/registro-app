import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TramitesPageComponent } from './pages/tramites-page/tramites-page.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: TramitesPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TramiteRoutingModule {}
