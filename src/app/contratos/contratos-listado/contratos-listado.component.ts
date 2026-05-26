import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppStateService, ContratoConContratista } from '../../data/app-state.service';

@Component({
  selector: 'app-contratos-listado',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contratos-listado.component.html',
  styleUrl: './contratos-listado.component.scss'
})
export class ContratosListadoComponent {
  private state = inject(AppStateService);
  contratos$ = this.state.contratos$;

  eliminar(id: number): void {
    this.state.removeContrato(id);
  }

  trackById(_: number, item: ContratoConContratista): number {
    return item.contrato.id;
  }
}

