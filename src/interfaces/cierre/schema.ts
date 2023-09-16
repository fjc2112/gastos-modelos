import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface ICierreTarjeta {
  _id?: string;

  idUsuario?: string;
  idTarjeta?: string;
  fechaInicio?: string;
  fechaCierre?: string;
  fechaVencimiento?: string;
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
