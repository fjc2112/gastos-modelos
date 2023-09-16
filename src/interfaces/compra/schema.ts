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
  importeCuota?: number;
  importeContado?: number;
  importeContadoUSD?: number;

  // Virtuals
  usuario?: IUsuario;
  tarjeta?: ITarjeta;
}
