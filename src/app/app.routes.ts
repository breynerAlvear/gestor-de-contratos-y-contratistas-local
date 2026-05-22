import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';



export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
    path: 'contratos',
    loadComponent: () =>
      import('./contratos/contratos-listado/contratos-listado.component').then(m => m.ContratosListadoComponent)
      },
      {
   path: 'contratos/nuevo',
   loadComponent: () =>
     import('./contratos/contrato-form/contrato-form.component').then(m => m.ContratoFormComponent)
      },
      {
   path: 'contratistas',
   loadComponent: () =>
     import('./contratistas/contratistas-listado/contratistas-listado.component').then(m => m.ContratistasListadoComponent)
      },
      {
   path: 'contratistas/nuevo',
   loadComponent: () =>
     import('./contratistas/contratista-form/contratista-form.component').then(m => m.ContratistaFormComponent)
      }
    ]
  }
];

