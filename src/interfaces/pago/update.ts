import { MetodoPago } from "../compra";

export interface IUpdatePago {
  idUsuario?: string;
  fecha?: string;
  metodoPago?: MetodoPago;
  importe?: number;
  importeUSD?: number;

  idResumenTarjeta?: string;
  idCompra?: string;

  // Tarjeta de Debito
  idTarjeta?: string;
}
