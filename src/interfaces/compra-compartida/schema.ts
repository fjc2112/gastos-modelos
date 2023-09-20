import { ICompra } from "../compra/schema";
import { IUsuario } from "../usuario";

export interface ICompraCompratida extends ICompra {
  _id?: string;

  idsUsuarios?: string[];
  idGrupo?: string;

  // Virtuals
  usuarios?: IUsuario[];
  grupo?: IGrupo;
}
