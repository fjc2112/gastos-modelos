import { MetodoPago } from "../../auxiliares";
import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IDebitoAutomatico {
  _id?: string;
  idUsuario?: string;

  fecha?: string;
  periodo?: string;
  producto?: string;
  tienda?: string;
  metodoPago?: MetodoPago;
  importeTotal?: number;
  importeTotalUSD?: number;

  // Tarjeta de Crédito
  idTarjeta?: string;
  cuotas?: number;
  periodosPago?: string[];
  importeCuota?: number;
  importeContadoUSD?: number;

  // Virtuals
  virtuals?: {
    usuario?: IUsuario;
    tarjeta?: ITarjeta;
  };
}
