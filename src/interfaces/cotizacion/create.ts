import { ICotizacion } from "./schema";

type Omitir = "_id";

export interface ICreateCotizacion extends Omit<Partial<ICotizacion>, Omitir> {}
