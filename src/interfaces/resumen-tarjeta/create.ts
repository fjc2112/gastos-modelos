export interface ICreateResumenTarjeta {
  idUsuario?: string;
  idTarjeta?: string;
  /**
   * Fecha de resumen (mes y año)
   * @example "2021-05"
   */
  fechaResumen?: string;
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
