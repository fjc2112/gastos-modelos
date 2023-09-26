export interface IResumenResumenTarjeta {
  periodos: {
    periodo: string;
    sumaImportes: number;
    sumaImportesUSD: number;
    impuestos: number;
    impuestosUSD: number;
    intereses: number;
    interesesUSD: number;
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
  impuestos: number;
  impuestosUSD: number;
  intereses: number;
  interesesUSD: number;
  compras1Pago: number;
  compras1PagoUSD: number;
  comprasCuotas: number;
  comprasCuotasUSD: number;
  debitosAutomaticos: number;
  debitosAutomaticosUSD: number;
  reintegros: number;
  reintegrosUSD: number;
}
