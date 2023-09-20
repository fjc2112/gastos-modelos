import { ICompra } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateCompra extends Omit<Partial<ICompra>, Omitir> {}
