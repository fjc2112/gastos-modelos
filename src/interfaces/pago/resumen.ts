export interface IResumenPagos {
  periodos: {
    categorias: {
      categoria: string;
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
