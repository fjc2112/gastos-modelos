import { ICompra, MetodoPago } from "../compra";
import { IResumenTarjeta } from "../resumen-tarjeta";
import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IPago {
  _id?: string;

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
  idComraVentaDolar?: string;
  detalle?: string;

  // Tarjeta de Debito
  idTarjeta?: string;

  // Virtuals
  usuario?: IUsuario;
  tarjeta?: ITarjeta;
  resumenTarjeta?: IResumenTarjeta;
  compra?: ICompra;
}
