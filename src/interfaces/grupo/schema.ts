import { IUsuario } from "../usuario";

export interface IGrupo {
  _id?: string;

  nombre?: string;
  idAdministrador?: string;
  idsMiembros?: string[];
  idsSolicitudes?: string[];

  // Virtuals
  virtuals?: {
    administrador?: IUsuario;
    miembros?: IUsuario[];
    solicitudes?: IUsuario[];
  };
}
