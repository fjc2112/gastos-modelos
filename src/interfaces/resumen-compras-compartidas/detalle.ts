import { ICompra } from "../compra";
import { IReintegro } from "../reintegro";
import { IResumenCompraCompartida } from "./schema";

export interface IDetallesResumenCompraCompartida {
  resumen?: IResumenCompraCompartida;
  compras1Pago?: ICompra[];
  comprasCuotas?: ICompra[];
  debitosAutomaticos?: ICompra[];
  reintegros?: IReintegro[];
}
