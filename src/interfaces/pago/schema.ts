import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IPago {
  _id?: string;

  idUsuario?: string;
  fecha?: string;
  idTarjeta?: string;
  importeImporte?: number;

  // Virtuals
  usuario?: IUsuario;
  tarjeta?: ITarjeta;
}
