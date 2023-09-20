import { IUsuario } from "../usuario";

export type TipoTarjeta = "Crédito" | "Débito";

export interface ITarjeta {
  _id?: string;
  idUsuario?: string;

  tipo?: TipoTarjeta;
  banco?: string;
  identificacion?: string;
  numero?: string;
  titular?: string;
  vencimiento?: string;
  limiteCompra1Pago?: number;
  limiteCompraCuotas?: number;
  fechaPrimerCierre?: string;
  diasCierreAlVencimiento?: number;

  // Virtuals
  virtuals?: {
    usuario?: IUsuario;
  };
}
