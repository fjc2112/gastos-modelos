import { ICompra, IVirtualsCompra } from "../compra/schema";
import { IGrupo } from "../grupo";
import { IUsuario } from "../usuario";

export interface IVirtualsCompraCompartida extends IVirtualsCompra {
  usuarios?: IUsuario[];
  grupo?: IGrupo;
}

export interface ICompraCompartida extends ICompra {
  idsUsuarios?: string[];
  idGrupo?: string;

  // Virtuals
  virtuals?: IVirtualsCompraCompartida;
}
