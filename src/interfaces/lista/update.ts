import { ILista } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdateLista extends Omit<Partial<ILista>, Omitir> {}
