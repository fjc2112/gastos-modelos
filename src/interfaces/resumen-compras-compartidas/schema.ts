import { IGrupo } from "../grupo";
import { IPago } from "../pago";
import { IUsuario } from "../usuario";

export interface IResumenCompraCompartida {
  _id?: string;

  idsUsuarios?: string[];
  idGrupo?: string;

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

  saldos?: {
    idUsuario?: string;
    saldo?: number;
  }[];

  idPago?: string;

  // Virtuals
  virtuals?: {
    usuarios?: IUsuario[];
    grupo?: IGrupo;
    pago?: IPago;
  };
}
