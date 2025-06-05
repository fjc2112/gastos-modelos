import { IUsuario } from "../usuario";

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
