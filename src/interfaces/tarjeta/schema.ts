import { IUsuario } from "../usuario";

export type TipoTarjeta = "Crédito" | "Débito";
export type EmpresaTarjeta =
  | "Visa"
  | "MasterCard"
  | "American Express"
  | "Otra";

export interface ITarjeta {
  _id?: string;
  idUsuario?: string;

  tipo?: TipoTarjeta;
  empresa?: EmpresaTarjeta;
  banco?: string;
  identificacion?: string;
  numero?: string;
  titular?: string;
  vencimiento?: string;
  limiteCompra1Pago?: number;
  limiteCompraCuotas?: number;

  diaDeCierre?: number;
  fechaPrimerCierre?: string;
  diasCierreAlVencimiento?: number;

  // Virtuals
  virtuals?: {
    usuario?: IUsuario;
  };
}
