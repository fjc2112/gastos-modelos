import { MetodoPago } from "../compra";

export interface IUpdatePago {
  idUsuario?: string;
  fecha?: string;
  metodoPago?: MetodoPago;
  importe?: number;

  // Tarjeta de Crédito
  idTarjeta?: string;
}
