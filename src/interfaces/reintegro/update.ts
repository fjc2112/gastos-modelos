import { MetodoPago } from "../compra";

export interface IUpdateReintegro {
  fecha?: string;
  concepto?: string;
  metodoPago?: MetodoPago;
  importeTotal?: number;
  importeTotalUSD?: number;

  // Tarjeta de Crédito
  idTarjeta?: string;
  /**
   * Fecha de reintegro (mes y año)
   * @example "2021-04"
   */
  fechaReintegro?: string;
  /**
   * Fecha de pago (mes y año)
   * @example "2021-05"
   */
  fechaPago?: string;
}
