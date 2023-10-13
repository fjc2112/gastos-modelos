import { IItemLista } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateItemLista extends Omit<Partial<IItemLista>, Omitir> {}
