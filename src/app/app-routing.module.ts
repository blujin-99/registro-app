import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isLoggedInGuard } from './core/guards/is-logged-in.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./modules/inicio/inicio.module').then((m) => m.InicioModule),
  },
  {
    path: 'misTramites',
    // canActivate: [isLoggedInGuard],
    loadChildren: () =>
      import('./modules/tramites/tramites.module').then(
        (m) => m.TramitesModule
      ),
  },
  {
    path: 'nuevoTramite',
    canActivate: [isLoggedInGuard],
    loadChildren: () =>
      import('./modules/nuevo-tramite/nuevo-tramite.module').then(
        (m) => m.NuevoTramiteModule
      ),
  },
  {
    path: 'configuracion',
    canActivate: [isLoggedInGuard],
    loadChildren: () =>
      import('./modules/configuracion/configuracion.module').then(
        (m) => m.ConfiguracionModule
      ),
  },
  {
    path: 'consultaMesaEntrada',
    loadChildren: () =>
      import(
        './modules/consulta-estado-tramite-mesa-entrada/consulta-estado-tramite-mesa-entrada.module'
      ).then((m) => m.ConsultaEstadoTramiteMesaEntradaModule),
  },
  {
    path: 'consultaPagos',
    loadChildren: () =>
      import('./modules/consulta-pagos/consulta-pagos.module').then(
        (m) => m.ConsultaPagosModule
      ),
  },
  {
    path: 'otrasTasas',
    loadChildren: () =>
      import('./modules/pagos-otras-tasas/pagos-otras-tasas.module').then(
        (m) => m.PagosOtrasTasasModule
      ),
  },
  {
    path: ':token',
    //canActivate: [isLoggedInGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
