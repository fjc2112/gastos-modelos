import { IUsuario } from "../usuario";

export type TipoIngreso = "Fijo" | "Trabajo Extra" | "Venta" | "Otro";

export interface IIngreso {
  _id?: string;
  idUsuario?: string;

  fecha?: string;
  periodo?: string;
  año?: number;

  fuente?: string;
  detalle?: string;
  tipo?: TipoIngreso;

  importe?: number;
  importeUSD?: number;

  // Virtuals
  virtuals?: {
    usuario?: IUsuario;
  };
}
