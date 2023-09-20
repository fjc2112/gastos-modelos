import { ITarjeta } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdateTarjeta extends Omit<Partial<ITarjeta>, Omitir> {}
