export interface IResumenResumenCompraTercero {
  periodos: {
    periodo: string;
    periodoPago: string;
    sumaImportes: number;
    sumaImportesUSD: number;
  }[];
  sumaImportes: number;
  sumaImportesUSD: number;
  //
  promedioImportes: number;
  promedioImportesUSD: number;
}
