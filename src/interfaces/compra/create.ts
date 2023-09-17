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
  fechaCompra?: string; // Solo mes y año (ej: 2021-04)
  fechasPago?: string[]; // Solo mes y año (ej: ["2021-05", "2021-06"])
  importeCuota?: number;
  importeContado?: number;
  importeContadoUSD?: number;
  interesAnual?: number;
}
