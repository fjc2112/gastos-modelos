import { MetodoPago } from "../../auxiliares";
import { ITipoBien } from "../compra";
import { ILista } from "../lista";

export type EstadoItemLista = "Pendiente" | "Comprado";

export interface IItemLista {
  _id?: string;
  idLista?: string;

  // Fecha
  fechaAgregado?: string;

  estado?: EstadoItemLista;
  fechaComprado?: string;

  // Datos del producto
  tipoBien?: ITipoBien;
  descripcion?: string;
  vendedor?: string;
  categoria?: string;

  // Datos del pago
  precio?: number;
  precioUSD?: number;

  virtuals?: {
    lista?: ILista;
  };
}
