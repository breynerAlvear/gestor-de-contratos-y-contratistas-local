import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppStateService } from '../../data/app-state.service';

@Component({
  selector: 'app-contratistas-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contratistas-form.component.html',
  styleUrl: './contratistas-form.component.scss'
})
export class ContratistasFormComponent {
  private fb = inject(FormBuilder);
  private state = inject(AppStateService);
  private router = inject(Router);

  form = this.fb.group({
    nombre: ['', Validators.required],
    documento: ['', Validators.required],
    cargo: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', Validators.required]
  });

  guardar(): void {
    if (this.form.invalid) return;

    this.state.addContratista({
      id: Date.now(),
      nombre: this.form.value.nombre ?? '',
      documento: this.form.value.documento ?? '',
      cargo: this.form.value.cargo ?? '',
      email: this.form.value.email ?? '',
      telefono: this.form.value.telefono ?? '',
      estado: undefined,
      nit: undefined,
      tipo: undefined
    });

    this.router.navigate(['/contratistas']);
  }
}

