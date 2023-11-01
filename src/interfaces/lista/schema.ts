import { IGrupo } from "../grupo";
import { IUsuario } from "../usuario";

export type ITipoLista = "Personal" | "En Común";

export interface ILista {
  _id?: string;
  idUsuario?: string;

  // Fecha
  fecha?: string;
  periodo?: string;
  año?: number;

  // Tipo de lista
  tipo?: ITipoLista;
  nombre?: string;

  // Datos de lista en comun
  idsUsuarios?: string[];
  idGrupo?: string;

  // Virtuals
  virtuals?: {
    usuario?: IUsuario;
    usuarios?: IUsuario[];
    grupo?: IGrupo;
  };
}
