import { IResumenCompraCompartida } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdateResumenCompraCompartida
  extends Omit<Partial<IResumenCompraCompartida>, Omitir> {}
