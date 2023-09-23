import { IResumenCompraTercero } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdateResumenCompraTercero
  extends Omit<Partial<IResumenCompraTercero>, Omitir> {}
