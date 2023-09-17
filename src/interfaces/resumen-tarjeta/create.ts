export interface ICreateResumenTarjeta {
  idUsuario?: string;
  idTarjeta?: string;
  fechaResumen?: string; // Solo mes y año (ej: 2021-05)
  fechaInicio?: string;
  fechaCierre?: string;
  fechaVencimiento?: string;
  porcentajeImpuestos?: number;
  //
  totalImpuestos?: number;
  totalIntereses?: number;
  totalCompras1Pago?: number;
  totalComprasCuotas?: number;
  totalDebitosAutomaticos?: number;
  totalReintegros?: number;
  importeFinal?: number;
  importeFinalUSD?: number;
}
