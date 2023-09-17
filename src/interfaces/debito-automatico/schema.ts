import { MetodoPago } from "../compra";
import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IDebitoAutomatico {
  _id?: string;

  idUsuario?: string;
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

  // Virtuals
  usuario?: IUsuario;
  tarjeta?: ITarjeta;
}
