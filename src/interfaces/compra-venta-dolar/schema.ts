export interface ICompraVentaDolar {
  _id?: string;

  idUsuario?: string;
  fecha?: string;
  periodo?: string;

  operacion?: "Compra" | "Venta";
  tipo?: "Oficial" | "Blue";
  cotizacion?: number;
  monto?: number;
  montoUSD?: number;
}
