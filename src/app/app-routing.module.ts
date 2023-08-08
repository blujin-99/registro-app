import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'tramite',
    loadChildren: () =>
      import('./modules/nuevo-tramite/nuevo-tramite.module').then(
        (m) => m.NuevoTramiteModule
      ),
  },
  {
    path: 'configuracion',
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
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
