import { IPago } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreatePago extends Omit<Partial<IPago>, Omitir> {}
