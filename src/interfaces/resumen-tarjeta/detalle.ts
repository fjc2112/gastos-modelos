import { ICompra } from "../compra";
import { IReintegro } from "../reintegro";
import { IResumenTarjeta } from "./schema";

export interface IDetallesResumenTarjeta {
  resumen?: IResumenTarjeta;
  compras1Pago?: ICompra[];
  comprasCuotas?: ICompra[];
  debitosAutomaticos?: ICompra[];
  reintegros?: IReintegro[];
}
