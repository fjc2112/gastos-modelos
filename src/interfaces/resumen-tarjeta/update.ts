import { IResumenTarjeta } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdateResumenTarjeta
  extends Omit<Partial<IResumenTarjeta>, Omitir> {}
