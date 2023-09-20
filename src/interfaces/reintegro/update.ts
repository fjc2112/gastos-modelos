import { IReintegro } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdateReintegro extends Omit<Partial<IReintegro>, Omitir> {}
