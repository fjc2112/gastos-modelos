import { MetodoPago } from "../../auxiliares";
import { ICompra } from "../compra";
import { ICompraVentaDolar } from "../compra-venta-dolar";
import { IResumenCompraCompartida } from "../resumen-compras-compartidas";
import { IResumenCompraTercero } from "../resumen-compras-terceros";
import { IResumenTarjeta } from "../resumen-tarjeta";
import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IPago {
  _id?: string;
  idUsuario?: string;

  fecha?: string;
  periodo?: string;
  año?: number;

  metodoPago?: MetodoPago;
  importe?: number;
  importeUSD?: number;

  detalle?: string;
  idResumenTarjeta?: string;
  idCompra?: string;
  idCompraVentaDolar?: string;
  idResumenCompraCompartida?: string;
  idResumenCompraTercero?: string;

  // Tarjeta de Debito
  idTarjeta?: string;

  // Virtuals
  virtuals?: {
    usuario?: IUsuario;
    tarjeta?: ITarjeta;
    resumenTarjeta?: IResumenTarjeta;
    compra?: ICompra;
    compraVentaDolar?: ICompraVentaDolar;
    resumenCompraComparida?: IResumenCompraCompartida;
    idResumenCompraTercero?: IResumenCompraTercero;
  };
}
