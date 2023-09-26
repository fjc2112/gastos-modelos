export interface IResumenIngresos {
  periodos: {
    fuentes: {
      fuente: string;
      sumaImportes: number;
      sumaImportesUSD: number;
    }[];
    periodo: string;
    sumaImportes: number;
    sumaImportesUSD: number;
  }[];
  sumaImportes: number;
  sumaImportesUSD: number;
}
