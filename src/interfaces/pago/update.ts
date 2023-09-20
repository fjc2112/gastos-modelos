import { IPago } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdatePago extends Omit<Partial<IPago>, Omitir> {}
