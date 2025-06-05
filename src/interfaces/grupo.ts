import { IUsuario } from "./usuario";

export interface IMiembroGrupo {
  idUsuario?: string;
  porcentaje?: number;
  //
  usuario?: IUsuario;
}

export interface IGrupo {
  _id?: string;

  nombre?: string;
  idAdministrador?: string;

  miembros?: IMiembroGrupo[];
  solicitudes?: IMiembroGrupo[];

  // Virtuals
  virtuals?: {
    administrador?: IUsuario;
  };
}

type Omitir = "_id" | "virtuals";

export interface ICreateGrupo extends Omit<Partial<IGrupo>, Omitir> {
  nombresUsuario?: string[];
}

type OmitirUpdate = "_id" | "idAdministrador" | "virtuals";

export interface IUpdateGrupo extends Omit<Partial<IGrupo>, OmitirUpdate> {
  nombresUsuario?: string[];
}
