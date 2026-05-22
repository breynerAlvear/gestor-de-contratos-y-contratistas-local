import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Contrato {
  id: number;
  numeroContrato: string;
  titulo: string;
  tipo: string;
  estado: string;
  fechaInicio: string;
  fechaFin: string;
  monto: number;
}

export interface Contratista {
  id: number;
  nombre: string;
  tipo: string;
  nit: string;
  estado: string;
}

export interface ContratoConContratista {
  contrato: Contrato;
  contratista: Contratista;
}

const KEY_CONTRATOS = 'app_contratos';
const KEY_CONTRATISTAS = 'app_contratistas';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private contratosSubject = new BehaviorSubject<ContratoConContratista[]>(this.loadContratos());
  private contratistasSubject = new BehaviorSubject<Contratista[]>(this.loadContratistas());

  contratos$ = this.contratosSubject.asObservable();
  contratistas$ = this.contratistasSubject.asObservable();

  private loadContratos(): ContratoConContratista[] {
    const raw = localStorage.getItem(KEY_CONTRATOS);
    if (raw) return JSON.parse(raw);

    const seed: ContratoConContratista[] = [];
    localStorage.setItem(KEY_CONTRATOS, JSON.stringify(seed));
    return seed;
  }

  private loadContratistas(): Contratista[] {
    const raw = localStorage.getItem(KEY_CONTRATISTAS);
    if (raw) return JSON.parse(raw);

    const seed: Contratista[] = [
      { id: 1, nombre: 'Limpieza S.A.S.', tipo: 'Empresa', nit: '900123456-1', estado: 'Activo' }
    ];
    localStorage.setItem(KEY_CONTRATISTAS, JSON.stringify(seed));
    return seed;
  }

  private saveContratos(data: ContratoConContratista[]): void {
    localStorage.setItem(KEY_CONTRATOS, JSON.stringify(data));
  }

  private saveContratistas(data: Contratista[]): void {
    localStorage.setItem(KEY_CONTRATISTAS, JSON.stringify(data));
  }

  addContrato(item: ContratoConContratista): void {
    const actual = [...this.contratosSubject.value, item];
    this.contratosSubject.next(actual);
    this.saveContratos(actual);
  }

  addContratista(item: Contratista): void {
    const actual = [...this.contratistasSubject.value, item];
    this.contratistasSubject.next(actual);
    this.saveContratistas(actual);
  }

  removeContrato(id: number): void {
    const actual = this.contratosSubject.value.filter(item => item.contrato.id !== id);
    this.contratosSubject.next(actual);
    this.saveContratos(actual);
  }

  removeContratista(id: number): void {
    const actual = this.contratistasSubject.value.filter(item => item.id !== id);
    this.contratistasSubject.next(actual);
    this.saveContratistas(actual);
  }
} 
 