import { MetodoPago } from "../../auxiliares";
import { ITipoBien } from "../compra";

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
  metodoPago?: MetodoPago;
  precio?: number;
  precioUSD?: number;
}
