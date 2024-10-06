import { FondoSuscrito } from "./fondosuscrito";

export interface Cliente {
    id: string;
    nombre:string;
    fondosSuscritos:Array<FondoSuscrito>;
    saldo: number;
    notificacionPreferida: string;
    email:string;
    telefono: string;
}