import { IIngreso } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdateIngreso extends Omit<Partial<IIngreso>, Omitir> {}
