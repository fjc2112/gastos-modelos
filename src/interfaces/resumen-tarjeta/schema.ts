import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IResumenTarjeta {
  _id?: string;

  idUsuario?: string;
  idTarjeta?: string;
  fechaResumen?: string; // Solo mes y año (ej: 2021-05)
  fechaInicio?: string;
  fechaCierre?: string;
  fechaVencimiento?: string;
  porcentajeImpuestos?: number;
  //
  totalImpuestos?: number;
  totalIntereses?: number;
  totalCompras1Pago?: number;
  totalComprasCuotas?: number;
  totalDebitosAutomaticos?: number;
  totalReintegros?: number;
  importeFinal?: number;
  importeFinalUSD?: number;

  // Virtuals
  usuario?: IUsuario;
  tarjeta?: ITarjeta;
}
