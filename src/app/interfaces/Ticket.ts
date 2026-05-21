import { App } from "../app";
import { Status } from "./Status";
import { Type } from "./Type";

export interface Ticket{
    idTicket:number;
    nameTicket:string;
    authorTicket:string;
    authorMsgTicket:string;
    devTicket:string;
    devMsgTicket:string;
    startdateTicket:Date;
    updateDateTicket:Date;
    appTicket:App;
    statusTicket:Status;
    typeTicket:Type;
}