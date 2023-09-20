import { IDebitoAutomatico } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateDebitoAutomatico
  extends Omit<Partial<IDebitoAutomatico>, Omitir> {}
