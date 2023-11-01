export interface IResumenResumenCompraCompartida {
  periodos: {
    periodo: string;
    fechaVencimiento: string;
    sumaImportes: number;
    sumaImportesUSD: number;
  }[];
  sumaImportes: number;
  sumaImportesUSD: number;
  //
  promedioImportes: number;
  promedioImportesUSD: number;
}
