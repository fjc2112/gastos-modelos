import { MetodoPago } from "../compra";
import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IPago {
  _id?: string;

  idUsuario?: string;
  fecha?: string;
  metodoPago?: MetodoPago;
  importe?: number;

  // Tarjeta de Crédito
  idTarjeta?: string;

  // Virtuals
  usuario?: IUsuario;
  tarjeta?: ITarjeta;
}
