import { IGrupo } from "../grupo";
import { IPago } from "../pago";
import { IUsuario } from "../usuario";

export interface IResumenCompraCompartida {
  _id?: string;

  idsUsuarios?: string[];
  idGrupo?: string;

  periodo?: string;
  periodoPago?: string;

  importeTotal?: number;
  importeTotalUSD?: number;

  saldos?: {
    idUsuario?: string;
    saldo?: number;
  }[];

  // Virtuals
  virtuals?: {
    usuario?: IUsuario;
    grupo?: IGrupo;
    pago?: IPago;
  };
}
