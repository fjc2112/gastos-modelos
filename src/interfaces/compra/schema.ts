import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export type MetodoPago =
  | "Efectivo"
  | "Débito"
  | "Crédito"
  | "MercadoPago"
  | "Cuenta DNI"
  | "MODO"
  | "Otro";

export interface ICompra {
  _id?: string;

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
  /**
   * Fecha de compra (mes y año)
   * @example "2021-04"
   */
  fechaCompra?: string;
  /**
   * Fechas de pago (mes y año)
   * @example ["2021-05", "2021-06"]
   */
  fechasPago?: string[];
  importeCuota?: number;
  importeContado?: number;
  importeContadoUSD?: number;
  interesAnual?: number;

  // Virtuals
  usuario?: IUsuario;
  tarjeta?: ITarjeta;
}
