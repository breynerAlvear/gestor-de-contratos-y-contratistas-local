import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContratistasListadoComponent } from './contratistas/contratistas-listado/contratistas-listado.component';
import { ContratistasFormComponent } from './contratistas/contratistas-form/contratistas-form.component';
import { ContratosListadoComponent } from './contratos/contratos-listado/contratos-listado.component';
import { ContratosFormComponent } from './contratos/contratos-form/contratos-form.component'; 

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'contratistas', component: ContratistasListadoComponent },
      { path: 'contratistas/nuevo', component: ContratistasFormComponent },
      { path: 'contratos', component: ContratosListadoComponent },
      { path: 'contratos/nuevo', component: ContratosFormComponent }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

