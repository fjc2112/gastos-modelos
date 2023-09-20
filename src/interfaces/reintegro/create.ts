import { IReintegro } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateReintegro extends Omit<Partial<IReintegro>, Omitir> {}
