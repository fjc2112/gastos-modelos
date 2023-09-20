import { ITarjeta } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateTarjeta extends Omit<Partial<ITarjeta>, Omitir> {}
