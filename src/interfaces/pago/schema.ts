import { MetodoPago } from "../../auxiliares";
import { ICompra } from "../compra";
import { ICompraVentaDolar } from "../compra-venta-dolar";
import { IDebitoAutomatico } from "../debito-automatico";
import { IResumenTarjeta } from "../resumen-tarjeta";
import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IPago {
  _id?: string;
  idUsuario?: string;

  fecha?: string;
  periodo?: string;
  metodoPago?: MetodoPago;
  importe?: number;
  importeUSD?: number;

  detalle?: string;
  idResumenTarjeta?: string;
  idCompra?: string;
  idCompraVentaDolar?: string;
  idDebitoAutomatico?: string;

  // Tarjeta de Debito
  idTarjeta?: string;

  // Virtuals
  virtuals?: {
    usuario?: IUsuario;
    tarjeta?: ITarjeta;
    resumenTarjeta?: IResumenTarjeta;
    compra?: ICompra;
    compraVentaDolar?: ICompraVentaDolar;
    debitoAutomatico?: IDebitoAutomatico;
  };
}
