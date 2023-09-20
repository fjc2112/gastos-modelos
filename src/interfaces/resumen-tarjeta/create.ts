import { IResumenTarjeta } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateResumenTarjeta
  extends Omit<Partial<IResumenTarjeta>, Omitir> {}
