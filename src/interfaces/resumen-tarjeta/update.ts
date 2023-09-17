export interface IUpdateResumenTarjeta {
  idUsuario?: string;
  idTarjeta?: string;
  fechaInicio?: string;
  fechaCierre?: string;
  fechaVencimiento?: string;
  //
  totalImpuestos?: number;
  totalIntereses?: number;
  totalCompras1Pago?: number;
  totalComprasCuotas?: number;
  totalDebitosAutomaticos?: number;
  totalReintegros?: number;
  importeFinal?: number;
}
