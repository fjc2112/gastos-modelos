import { ICompra } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdateCompra extends Omit<Partial<ICompra>, Omitir> {}
