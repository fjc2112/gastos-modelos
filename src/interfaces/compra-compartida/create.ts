import { ICompraCompartida } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateCompraCompartida
  extends Omit<Partial<ICompraCompartida>, Omitir> {}
