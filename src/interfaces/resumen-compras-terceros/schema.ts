import { IPago } from "../pago";
import { IUsuario } from "../usuario";

export interface IResumenCompraTercero {
  _id?: string;

  idUsuario?: string;
  idUsuarioTercero?: string;

  periodo?: string;
  periodoPago?: string;

  //
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

  cantidadCompras?: number;

  idPago?: string;

  // Virtuals
  virtuals?: {
    usuario?: IUsuario;
    usuarioTercero?: IUsuario;
    pago?: IPago;
  };
}
