import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface ICompra {
  _id?: string;

  idUsuario?: string;
  fecha?: string;
  producto?: string;
  tienda?: string;
  idTarjeta?: string;
  cuotas?: number;
  importeTotal?: number;
  importeCuota?: number;

  // Virtuals
  usuario?: IUsuario;
  tarjeta?: ITarjeta;
}
