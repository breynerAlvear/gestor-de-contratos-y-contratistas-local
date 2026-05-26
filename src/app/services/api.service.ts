import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contrato {
  id?: number;
  nombre: string;
  contratista: string;
  fecha_inicio?: string | null;
  fecha_fin?: string | null;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);

  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>('/api/contratos');
  }
}

