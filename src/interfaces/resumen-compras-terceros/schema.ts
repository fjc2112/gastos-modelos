import { IUsuario } from "../usuario";

export interface IResumenCompraTercero {
  _id?: string;

  idsUsuarios?: string[];

  periodo?: string;
  periodoPago?: string;

  importeTotal?: number;
  importeTotalUSD?: number;

  saldos?: {
    idUsuario?: string;
    saldo?: number;
  }[];

  idPago?: string;

  // Virtuals
  virtuals?: {
    usuarios?: IUsuario[];
  };
}
