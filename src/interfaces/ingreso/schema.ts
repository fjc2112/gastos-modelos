import { IUsuario } from "../usuario";

export type CategoriaIngreso = "Fijo" | "Extra" | "Otro";

export interface IIngreso {
  _id?: string;
  idUsuario?: string;

  fecha?: string;
  periodo?: string;
  año?: number;

  fuente?: string;
  detalle?: string;
  categoria?: CategoriaIngreso;

  importe?: number;
  importeUSD?: number;

  // Virtuals
  virtuals?: {
    usuario?: IUsuario;
  };
}
