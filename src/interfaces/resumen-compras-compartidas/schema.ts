import { IGrupo } from "../grupo";
import { IUsuario } from "../usuario";

export interface IResumenCompraCompartida {
  _id?: string;

  idsUsuarios?: string[];
  idGrupo?: string;

  periodo?: string;
  periodoPago?: string;

  importeTotal?: number;
  importeTotalUSD?: number;

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
  };
}
