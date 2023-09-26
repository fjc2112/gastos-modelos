export interface IResumenCompraVentaDolar {
  periodos: {
    periodo: string;
    sumaImportes: number;
    sumaImportesUSD: number;
  }[];
  sumaImportes: number;
  sumaImportesUSD: number;
}
