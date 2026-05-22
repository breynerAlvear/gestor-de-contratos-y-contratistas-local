export interface Contrato {
  id: number | string;
  numeroContrato: string;
  titulo: string;
  tipo: 'compra' | 'servicio' | 'arrendamiento' | 'prestacion';
  estado: 'borrador' | 'aprobado' | 'firmado' | 'vigente' | 'vencido' | 'cancelado';
  fechaInicio: Date;
  fechaFin: Date;
  monto: number;
  observaciones: string;
}

export interface Contratista {
  id: number | string;
  nombre: string;
  tipo: 'empresa' | 'persona_natural';
  nit?: string;
  direccion?: string;
  telefono?: string;
  correo?: string;
}

export interface ContratoConContratista {
  contrato: Contrato;
  contratista: Contratista;
}
