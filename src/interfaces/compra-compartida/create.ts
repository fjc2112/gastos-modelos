import { MetodoPago } from "../compra/schema";

export interface ICreateCompraCompratida {
  idUsuario?: string;
  idsUsuarios?: string[];
  idGrupo?: string;

  fecha?: string;
  periodo?: string;

  producto?: string;
  tienda?: string;
  metodoPago?: MetodoPago;

  importe?: number;
  importeUSD?: number;
}
