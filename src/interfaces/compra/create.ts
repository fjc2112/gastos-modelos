export interface ICreateCompra {
  idUsuario?: string;
  fecha?: string;
  producto?: string;
  tienda?: string;
  idTarjeta?: string;
  cuotas?: number;
  importeTotal?: number;
  importeCuota?: number;
}
