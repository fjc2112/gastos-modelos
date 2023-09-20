import { IUsuario } from "./schema";

type Omitir = "_id" | "idUsuario" | "virtuals";

export interface IUpdateUsuario extends Omit<Partial<IUsuario>, Omitir> {
  password?: string;
}
