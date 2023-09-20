import { ICompraVentaDolar } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateCompraVentaDolar
  extends Omit<Partial<ICompraVentaDolar>, Omitir> {}
