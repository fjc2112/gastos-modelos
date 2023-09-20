import { IDebitoAutomatico } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdateDebitoAutomatico
  extends Omit<Partial<IDebitoAutomatico>, Omitir> {}
