import { ILista } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateLista extends Omit<Partial<ILista>, Omitir> {}
