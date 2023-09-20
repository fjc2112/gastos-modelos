import { ICompraVentaDolar } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdateCompraVentaDolar
  extends Omit<Partial<ICompraVentaDolar>, Omitir> {}
