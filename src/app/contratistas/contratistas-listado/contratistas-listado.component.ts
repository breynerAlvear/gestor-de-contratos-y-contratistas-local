import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppStateService } from '../../data/app-state.service';

@Component({
  selector: 'app-contratistas-listado',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contratistas-listado.component.html',
  styleUrl: './contratistas-listado.component.scss'
})
export class ContratistasListadoComponent {
  private state = inject(AppStateService);
  contratistas$ = this.state.contratistas$;
}

