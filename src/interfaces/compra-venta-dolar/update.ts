export interface IUpdateCompraVentaDolar {
  fecha?: string;
  periodo?: string;

  operacion?: "Compra" | "Venta";
  tipo?: "Oficial" | "Blue";
  cotizacion?: number;
  monto?: number;
  montoUSD?: number;
}
