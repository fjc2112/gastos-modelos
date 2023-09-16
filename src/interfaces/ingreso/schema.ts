import { IUsuario } from "../usuario";

export interface IIngreso {
  _id?: string;

  idUsuario?: string;
  fecha?: string;
  fuente?: string;
  detalle?: string;
  importe?: number;
  importeUSD?: number;

  // Virtuals
  usuario?: IUsuario;
}
