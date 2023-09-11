import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface ICierre {
  _id?: string;

  idUsuario?: string;
  idTarjeta?: string;
  fechaCierre?: string;
  fechaVencimiento?: string;
  importe?: number;

  // Virtuals
  usuario?: IUsuario;
  tarjeta?: ITarjeta;
}
