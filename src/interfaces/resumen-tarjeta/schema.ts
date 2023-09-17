import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IResumenTarjeta {
  _id?: string;

  idUsuario?: string;
  idTarjeta?: string;
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

  // Virtuals
  usuario?: IUsuario;
  tarjeta?: ITarjeta;
}
