import { MetodoPago } from "./schema";

export interface ICreateCompra {
  idUsuario?: string;
  fecha?: string;
  producto?: string;
  tienda?: string;
  metodoPago?: MetodoPago;
  importeTotal?: number;
  importeTotalUSD?: number;

  // Tarjeta de Crédito
  idTarjeta?: string;
  cuotas?: number;
  importeCuota?: number;
  importeContado?: number;
  importeContadoUSD?: number;
  interesAnual?: number;
}
