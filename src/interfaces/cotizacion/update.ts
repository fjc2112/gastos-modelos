import { ICotizacion } from "./schema";

type Omitir = "_id";

export interface IUpdateCotizacion extends Omit<Partial<ICotizacion>, Omitir> {}
