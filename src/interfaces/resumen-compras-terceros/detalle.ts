import { ICompra } from "../compra";
import { IReintegro } from "../reintegro";
import { IResumenCompraTercero } from "./schema";

export interface IDetallesResumenCompraTercero {
  resumen?: IResumenCompraTercero;
  compras1Pago?: ICompra[];
  comprasCuotas?: ICompra[];
  debitosAutomaticos?: ICompra[];
  reintegros?: IReintegro[];
}
