import { MetodoPago } from "./schema";

export interface IUpdateCompra {
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
  importeEfectivo?: number;
  importeEfectivoUSD?: number;
}
