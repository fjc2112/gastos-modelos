import { IResumenCompraTercero } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateResumenCompraTercero
  extends Omit<Partial<IResumenCompraTercero>, Omitir> {}
