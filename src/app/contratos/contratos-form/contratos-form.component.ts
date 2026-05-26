import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppStateService } from '../../data/app-state.service';

@Component({
  selector: 'app-contratos-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contratos-form.component.html',
  styleUrl: './contratos-form.component.scss'
})
export class ContratosFormComponent {
  private fb = inject(FormBuilder);
  private state = inject(AppStateService);
  private router = inject(Router);

  form = this.fb.group({
    numeroContrato: ['', Validators.required],
    titulo: ['', Validators.required],
    tipo: ['', Validators.required],
    estado: ['', Validators.required],
    fechaInicio: ['', Validators.required],
    fechaFin: ['', Validators.required],
    monto: [0, [Validators.required, Validators.min(1)]]
  });

  guardar(): void {
    if (this.form.invalid) return;

    this.state.addContrato({
      contrato: {
        id: Date.now(),
        numeroContrato: this.form.value.numeroContrato ?? '',
        titulo: this.form.value.titulo ?? '',
        tipo: this.form.value.tipo ?? '',
        estado: this.form.value.estado ?? '',
        fechaInicio: this.form.value.fechaInicio ?? '',
        fechaFin: this.form.value.fechaFin ?? '',
        monto: Number(this.form.value.monto ?? 0)
      },
      contratista: {
        id: 0,
        nombre: 'Sin asignar',
        documento: 'N/A',
        cargo: 'N/A',
        email: 'N/A',
        telefono: 'N/A',
        estado: undefined,
        nit: undefined,
        tipo: undefined
      }
    });

    this.router.navigate(['/contratos']);
  }
}


