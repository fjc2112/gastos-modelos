import { IResumenCompraCompartida } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateResumenCompraCompartida
  extends Omit<Partial<IResumenCompraCompartida>, Omitir> {}
