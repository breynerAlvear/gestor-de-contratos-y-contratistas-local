import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppStateService } from '../../data/app-state.service';

@Component({
  selector: 'app-contrato-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contrato-form.component.html',
  styleUrl: './contrato-form.component.scss'
})
export class ContratoFormComponent {
  private fb = inject(FormBuilder);
  private state = inject(AppStateService);
  private router = inject(Router);

  form = this.fb.group({
    numeroContrato: ['', Validators.required],
    titulo: ['', Validators.required],
    tipo: ['Servicio', Validators.required],
    estado: ['Vigente', Validators.required],
    fechaInicio: ['', Validators.required],
    fechaFin: ['', Validators.required],
    monto: ['', Validators.required],
    contratistaNombre: ['', Validators.required]
  });

  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();
    const id = Date.now();

    this.state.addContrato({
      contrato: {
        id,
        numeroContrato: v.numeroContrato ?? '',
        titulo: v.titulo ?? '',
        tipo: v.tipo ?? 'Servicio',
        estado: v.estado ?? 'Vigente',
        fechaInicio: v.fechaInicio ?? '',
        fechaFin: v.fechaFin ?? '',
        monto: Number(v.monto ?? 0)
      },
      contratista: {
        id,
        nombre: v.contratistaNombre ?? '',
        tipo: 'Empresa',
        nit: 'N/A',
        estado: 'Activo'
      }
    });

    this.router.navigate(['/contratos']);
  }
}

