import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './modules/inicio/pages/inicio-page/inicio-page.component';
import { ConfigPageComponent } from './modules/config/config-page/config-page.component';
import { UserPageComponent } from './modules/user/user-page/user-page.component';

const routes: Routes = [
  { path: '', component: InicioPageComponent },
  { path: 'config', component: ConfigPageComponent },
  { path: 'user', component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
