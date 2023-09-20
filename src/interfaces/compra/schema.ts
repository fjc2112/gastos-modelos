import { MetodoPago } from "../../auxiliares";
import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IVirtualsCompra {
  usuario?: IUsuario;
  tarjeta?: ITarjeta;
}

export interface ICompra {
  _id?: string;
  idUsuario?: string;

  fecha?: string;
  periodo?: string;
  producto?: string;
  tienda?: string;
  metodoPago?: MetodoPago;
  importeTotal: number;
  importeTotalUSD: number;

  // Tarjeta de Crédito
  idTarjeta?: string;
  cuotas?: number;
  periodosPago?: string[];
  importeCuota?: number;
  importeCuotaUSD?: number;
  importeContado?: number;
  importeContadoUSD?: number;
  interesAnual?: number;

  // Virtuals
  virtuals?: IVirtualsCompra;
}
