import { MetodoPago } from "../compra";

export interface IUpdateDebitoAutomatico {
  fecha?: string;
  metodoPago?: MetodoPago;
  producto?: string;
  tienda?: string;
  importeTotal?: number;
  importeTotalUSD?: number;

  // Tarjeta de Crédito
  idTarjeta?: string;
  cuotas?: number;
  /**
   * Fecha de compra (mes y año)
   * @example "2021-04"
   */
  fechaDebito?: string;
  /**
   * Fechas de pago (mes y año)
   * @example ["2021-05", "2021-06"]
   */
  fechasPago?: string[];
  importeCuota?: number;
  importeContadoUSD?: number;
}
