import { MetodoPago } from "../../auxiliares";
import { ICompra } from "../compra";
import { ICompraVentaDolar } from "../compra-venta-dolar";
import { IResumenTarjeta } from "../resumen-tarjeta";
import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IReintegro {
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

  // Tarjeta de Crédito
  idTarjeta?: string;
  cuotas?: number;
  periodosPago?: string[];
  importeCuota?: number;
  importeCuotaUSD?: number;

  // Virtuals
  virtuals?: {
    usuario?: IUsuario;
    tarjeta?: ITarjeta;
    compra?: ICompra;
    compraVentaDolar?: ICompraVentaDolar;
    resumenTarjeta?: IResumenTarjeta;
  };
}
