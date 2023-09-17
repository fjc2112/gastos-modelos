import { ICompra } from "../compra";
import { IDebitoAutomatico } from "../debito-automatico";
import { IReintegro } from "../reintegro";
import { IResumenTarjeta } from "./schema";

export interface IDetallesResumenTarjeta {
  resumen?: IResumenTarjeta;
  compras1Pago?: ICompra[];
  comprasCuotas?: ICompra[];
  reintegros?: IReintegro[];
  debitos?: IDebitoAutomatico[];
}
