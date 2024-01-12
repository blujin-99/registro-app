import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isLoggedInGuard, urlAccessGuard } from './core/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    //canActivate: [urlAccessGuard],
    loadChildren: () =>
      import('./modules/inicio/inicio.module').then((m) => m.InicioModule),
  },
  {
    path: 'misTramites',
    canActivate: [urlAccessGuard, isLoggedInGuard],
    loadChildren: () =>
      import('./modules/tramites/tramites.module').then(
        (m) => m.TramitesModule
      ),
  },
  {
    path: 'nuevoTramite',
    canActivate: [urlAccessGuard, isLoggedInGuard],
    loadChildren: () =>
      import('./modules/nuevo-tramite/nuevo-tramite.module').then(
        (m) => m.NuevoTramiteModule
      ),
  },
  {
    path: 'tramiteDigital',
    //canActivate: [urlAccessGuard, isLoggedInGuard],
    loadChildren: () =>
      import('./modules/tramites-digitales/tramites-digitales.module').then(
        (m) => m.TramitesDigitalesModule
      ),
  },
  {
    path: 'configuracion',
    canActivate: [urlAccessGuard, isLoggedInGuard],
    loadChildren: () =>
      import('./modules/configuracion/configuracion.module').then(
        (m) => m.ConfiguracionModule
      ),
  },
  {
    path: 'notificaciones',
    canActivate: [urlAccessGuard, isLoggedInGuard],
    loadChildren: () =>
      import('./modules/bandeja-notificaciones/notificaciones.module').then(
        (m) => m.NotificacionesModule
      ),
  },
  {
    path: 'consultaMesaEntrada',
    canActivate: [urlAccessGuard],
    loadChildren: () =>
      import(
        './modules/consulta-estado-tramite-mesa-entrada/consulta-estado-tramite-mesa-entrada.module'
      ).then((m) => m.ConsultaEstadoTramiteMesaEntradaModule),
  },
  {
    path: 'consultaPagos',
    canActivate: [urlAccessGuard],
    loadChildren: () =>
      import('./modules/consulta-pagos/consulta-pagos.module').then(
        (m) => m.ConsultaPagosModule
      ),
  },
  {
    path: 'otrasTasas',
    canActivate: [urlAccessGuard],
    loadChildren: () =>
      import('./modules/pagos-otras-tasas/pagos-otras-tasas.module').then(
        (m) => m.PagosOtrasTasasModule
      ),
  },
  {
    path: ':token',
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
  exports: [RouterModule],
})
export class AppRoutingModule {}
