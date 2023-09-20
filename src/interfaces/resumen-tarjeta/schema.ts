import { IPago } from "../pago";
import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IResumenTarjeta {
  _id?: string;
  idUsuario?: string;

  idTarjeta?: string;
  periodo?: string;
  periodoPago?: string;

  fechaInicio?: string;
  fechaCierre?: string;
  fechaVencimiento?: string;
  porcentajeImpuestos?: number;
  //
  totalImpuestos?: number;
  totalImpuestosUSD?: number;
  totalIntereses?: number;
  totalInteresesUSD?: number;
  totalCompras1Pago?: number;
  totalCompras1PagoUSD?: number;
  totalComprasCuotas?: number;
  totalComprasCuotasUSD?: number;
  totalDebitosAutomaticos?: number;
  totalDebitosAutomaticosUSD?: number;
  totalReintegros?: number;
  totalReintegrosUSD?: number;
  importeFinal?: number;
  importeFinalUSD?: number;

  idPago?: string;

  // Virtuals
  virtuals?: {
    usuario?: IUsuario;
    tarjeta?: ITarjeta;
    pago?: IPago;
  };
}
