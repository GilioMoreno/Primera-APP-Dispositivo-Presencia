import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'activar',
    loadChildren: () => import('./activar/activar.module').then( m => m.ActivarPageModule)
  },
  {
    path: 'desactivar',
    loadChildren: () => import('./desactivar/desactivar.module').then( m => m.DesactivarPageModule)
  },
  {
    path: 'reporte',
    loadChildren: () => import('./reporte/reporte.module').then( m => m.ReportePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
