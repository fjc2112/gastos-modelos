export interface IResumenResumenCompraTercero {
  periodos: {
    periodo: string;
    periodoPago: string;
    sumaImportes: number;
    sumaImportesUSD: number;
    compras1Pago: number;
    compras1PagoUSD: number;
    comprasCuotas: number;
    comprasCuotasUSD: number;
    debitosAutomaticos: number;
    debitosAutomaticosUSD: number;
    reintegros: number;
    reintegrosUSD: number;
  }[];
  sumaImportes: number;
  sumaImportesUSD: number;
  compras1Pago: number;
  compras1PagoUSD: number;
  comprasCuotas: number;
  comprasCuotasUSD: number;
  debitosAutomaticos: number;
  debitosAutomaticosUSD: number;
  reintegros: number;
  reintegrosUSD: number;
  //
  promedioImportes: number;
  promedioImportesUSD: number;
  promedioCompras1Pago: number;
  promedioCompras1PagoUSD: number;
  promedioComprasCuotas: number;
  promedioComprasCuotasUSD: number;
  promedioDebitosAutomaticos: number;
  promedioDebitosAutomaticosUSD: number;
  promedioReintegros: number;
  promedioReintegrosUSD: number;
}
