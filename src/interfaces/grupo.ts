import { IUsuario } from "./usuario";

export interface IMiembroGrupo {
  idUsuario?: string;
  porcentaje?: string;
  //
  usuario?: IUsuario;
}

export interface IGrupo {
  _id?: string;

  nombre?: string;
  idAdministrador?: string;
  idsMiembros?: string[];
  idsSolicitudes?: string[];

  miembros?: IMiembroGrupo[];
  solicitudes?: IMiembroGrupo[];

  // Virtuals
  virtuals?: {
    administrador?: IUsuario;
    miembros?: IUsuario[];
    solicitudes?: IUsuario[];
  };
}

type Omitir = "_id" | "virtuals";

export interface ICreateGrupo extends Omit<Partial<IGrupo>, Omitir> {}

type OmitirUpdate = "_id" | "idAdministrador" | "virtuals";

export interface IUpdateGrupo extends Omit<Partial<IGrupo>, OmitirUpdate> {}
