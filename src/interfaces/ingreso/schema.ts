import { IUsuario } from "../usuario";

export interface IIngreso {
  _id?: string;

  idUsuario?: string;
  fecha?: string;
  fuente?: string;
  detalle?: string;
  importe?: number;
  importeUSD?: number;
  /**
   * Fecha de ingreso (mes y año)
   * @example "2021-04"
   */
  fechaIngreso?: string;

  // Virtuals
  usuario?: IUsuario;
}
