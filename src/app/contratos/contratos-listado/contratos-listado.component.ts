import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppStateService } from '../../data/app-state.service';

@Component({
  selector: 'app-contratos-listado',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contratos-listado.component.html',
  styleUrl: './contratos-listado.component.scss'
})
export class ContratosListadoComponent {
  contratos$;

  constructor(private state: AppStateService) {
    this.contratos$ = this.state.contratos$;
  }

  eliminar(id: number): void {
    this.state.removeContrato(id);
  }
}

