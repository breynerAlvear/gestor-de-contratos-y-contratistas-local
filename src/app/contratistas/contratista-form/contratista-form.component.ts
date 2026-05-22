import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppStateService } from '../../data/app-state.service';

@Component({
  selector: 'app-contratista-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contratista-form.component.html',
  styleUrl: './contratista-form.component.scss'
})
export class ContratistaFormComponent {
  private fb = inject(FormBuilder);
  private state = inject(AppStateService);
  private router = inject(Router);

  form = this.fb.group({
    nombre: ['', Validators.required],
    tipo: ['Empresa', Validators.required],
    nit: ['', Validators.required],
    estado: ['Activo', Validators.required]
  });

  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();

    this.state.addContratista({
      id: Date.now(),
      nombre: v.nombre ?? '',
      tipo: v.tipo ?? 'Empresa',
      nit: v.nit ?? '',
      estado: v.estado ?? 'Activo'
    });

    this.router.navigate(['/contratistas']);
  }
}

