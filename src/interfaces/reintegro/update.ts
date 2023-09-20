import { MetodoPago } from "../compra";

export interface IUpdateReintegro {
  fecha?: string;
  concepto?: string;
  metodoPago?: MetodoPago;
  importeTotal?: number;
  importeTotalUSD?: number;

  idResumenTarjeta?: string;
  idCompra?: string;
  idCompraVentaDolar?: string;

  // Tarjeta de Crédito
  idTarjeta?: string;
  cuotas?: number;
  /**
   * Fecha de reintegro (mes y año)
   * @example "2021-04"
   */
  fechaReintegro?: string;
  /**
   * Fechas de pago (mes y año)
   * @example ["2021-05", "2021-06"]
   */
  fechasPago?: string[];
  importeCuota?: number;
}
