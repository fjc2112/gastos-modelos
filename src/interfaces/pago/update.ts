import { MetodoPago } from "../compra";

export interface IUpdatePago {
  idUsuario?: string;
  fecha?: string;
  metodoPago?: MetodoPago;
  importe?: number;
  importeUSD?: number;
  /**
   * Fecha de pago (mes y año)
   * @example "2021-04"
   */
  fechaPago?: string;

  idResumenTarjeta?: string;
  idCompra?: string;
  detalle?: string;

  // Tarjeta de Debito
  idTarjeta?: string;
}
