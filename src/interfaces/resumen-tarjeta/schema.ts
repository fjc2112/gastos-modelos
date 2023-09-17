import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IResumenTarjeta {
  _id?: string;

  idUsuario?: string;
  idTarjeta?: string;
  /**
   * Fecha de resumen (mes y año)
   * @example "2021-05"
   */
  fechaResumen?: string;
  /**
   * Fecha de pago (mes y año)
   * @example "2021-06"
   */
  fechaPago?: string;
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