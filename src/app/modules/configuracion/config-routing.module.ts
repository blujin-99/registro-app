import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionPageComponent } from './pages/configuracion-page/configuracion-page.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: ConfiguracionPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionRoutingModule {}
