import { IGrupo } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateGrupo extends Omit<Partial<IGrupo>, Omitir> {}
