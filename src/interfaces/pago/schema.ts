import { MetodoPago } from "../../auxiliares";
import { ICompra } from "../compra";
import { ICompraCompartida } from "../compra-compartida";
import { ICompraVentaDolar } from "../compra-venta-dolar";
import { IDebitoAutomatico } from "../debito-automatico";
import { IResumenCompraCompartida } from "../resumen-compras-compartidas";
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
  idCompraCompartida?: string;
  idResumenCompraCompartida?: string;

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
    compraCompartida?: ICompraCompartida;
    resumenCompraComparida?: IResumenCompraCompartida;
  };
}
