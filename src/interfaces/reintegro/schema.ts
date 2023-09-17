import { MetodoPago } from "../compra";
import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IReintegro {
  _id?: string;

  idUsuario?: string;
  fecha?: string;
  concepto?: string;
  metodoPago?: MetodoPago;
  importeTotal?: number;
  importeTotalUSD?: number;

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

  // Virtuals
  usuario?: IUsuario;
  tarjeta?: ITarjeta;
}
