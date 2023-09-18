import { ICompra, MetodoPago } from "../compra";
import { IResumenTarjeta } from "../resumen-tarjeta";
import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IPago {
  _id?: string;

  idUsuario?: string;
  fecha?: string;
  metodoPago?: MetodoPago;
  importe?: number;
  importeUSD?: number;

  idResumenTarjeta?: string;
  idCompra?: string;
  detalle?: string;

  // Tarjeta de Debito
  idTarjeta?: string;

  // Virtuals
  usuario?: IUsuario;
  tarjeta?: ITarjeta;
  resumnTarjeta?: IResumenTarjeta;
  compra?: ICompra;
}
