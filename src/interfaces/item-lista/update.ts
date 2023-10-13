import { IItemLista } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdateItemLista extends Omit<Partial<IItemLista>, Omitir> {}
