import { TipoTarjeta } from "./schema";

export interface IUpdateTarjeta {
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
}
