import { IUsuario } from "./schema";

type Omitir = "_id" | "virtuals";

export interface ICreateUsuario extends Omit<Partial<IUsuario>, Omitir> {
  password?: string;
}
