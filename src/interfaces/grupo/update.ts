import { IGrupo } from "./schema";

type Omitir = "_id" | "idAdministrador" | "virtuals";

export interface IUpdateGrupo extends Omit<Partial<IGrupo>, Omitir> {}
