import { ICompraCompartida } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdateCompraCompartida
  extends Omit<Partial<ICompraCompartida>, Omitir> {}
