import { Injectable,inject } from '@angular/core';
import { Ticket } from '../../interfaces/Ticket';
import { CreateTicket } from '../../interfaces/CreateTicket';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateTicket } from '../../interfaces/UpdateTicket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {

  private http = inject(HttpClient);
  private apiUrl = "http://localhost:5156/api/Ticket";

  getAll(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.apiUrl);
  }

  getAllByDev(name:string): Observable<Ticket[]>{
    return this.http.get<Ticket[]>("http://localhost:5156/dev/"+name);
  }

  getAllByAuthor(name:string): Observable<Ticket[]>{
    return this.http.get<Ticket[]>("http://localhost:5156/author/"+name);
  }

  getById(id:number): Observable<Ticket>{
    return this.http.get<Ticket>(this.apiUrl+"/"+id);
  }

  postTicket(ticket:CreateTicket) {

    return this.http.post(this.apiUrl,
      {
        nameTicket: ticket.nameTicket,
        authorTicket: ticket.authorTicket,
        authorMsgTicket: ticket.authorMsgTicket,
        startdateTicket: ticket.startdateTicket,
        updateDateTicket: ticket.updateDateTicket,
        appTicket: ticket.appTicket,
        statusTicket: ticket.statusTicket,
        typeTicket: ticket.typeTicket,
      }
    );
  }

  putTicket(ticket:UpdateTicket, id:number) {

    return this.http.put(this.apiUrl+"/"+id,
      {
        authorMsgTicket: ticket.authorMsgTicket,
        devTicket: ticket.devTicket,
        devMsgTicket: ticket.devMsgTicket,
        updateDateTicket: ticket.updateDateTicket,
        idStatusTicket: ticket.idStatusTicket,
        idTypeTicket: ticket.idTypeTicket,
      }
    );
  }

}
