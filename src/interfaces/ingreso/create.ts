import { IIngreso } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateIngreso extends Omit<Partial<IIngreso>, Omitir> {}
