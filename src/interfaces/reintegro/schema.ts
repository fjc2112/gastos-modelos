import { MetodoPago } from "../../auxiliares";
import { ITipoBien, ITipoCompra } from "../compra";
import { IGrupo } from "../grupo";
import { ITarjeta } from "../tarjeta";
import { IUsuario } from "../usuario";

export interface IReintegro {
  _id?: string;
  idUsuario?: string;

  // Fecha
  fecha?: string;
  periodo?: string;
  año?: number;

  // Tipo de compra
  tipo?: ITipoCompra;

  // Datos del producto
  tipoBien?: ITipoBien;
  descripcion?: string;
  vendedor?: string;
  categoria?: string;

  // Datos del pago
  metodoPago?: MetodoPago;
  importeTotal?: number;
  importeTotalUSD?: number;

  // Tarjeta de Crédito cuando el método de pago es Tarjeta de Crédito o debito automatico en tarjeta
  idTarjeta?: string;
  cuotas?: number;
  periodosPago?: string[];
  importeCuota?: number;
  importeCuotaUSD?: number;
  importeContado?: number;
  importeContadoUSD?: number;
  interesAnual?: number;

  // Datos de compra en comun
  idsUsuarios?: string[];
  idGrupo?: string;

  // Datos de compra a tercero
  idUsuarioTercero?: string;

  // Reintegros automaticos
  idCompraVentaDolar?: string;
  idResumenCompraCompartida?: string;
  idResumenCompraTercero?: string;

  // Virtuals
  virtuals?: {
    usuario?: IUsuario;
    tarjeta?: ITarjeta;
    usuarios?: IUsuario[];
    grupo?: IGrupo;
    usuarioTercero?: IUsuario;
  };
}
