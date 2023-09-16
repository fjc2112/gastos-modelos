import { MetodoPago } from "../compra";

export interface ICreatePago {
  idUsuario?: string;
  fecha?: string;
  metodoPago?: MetodoPago;
  importe?: number;
  importeUSD?: number;

  // Tarjeta de Crédito
  idTarjeta?: string;
}
