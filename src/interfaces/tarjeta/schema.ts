import { IUsuario } from "../usuario";

export interface ITarjeta {
  _id?: string;

  idUsuario?: string;
  nombre?: string;
  numero?: string;

  // Virtuals
  usuario?: IUsuario;
}
