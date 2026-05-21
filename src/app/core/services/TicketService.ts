import { Injectable,inject } from '@angular/core';
import { Ticket } from '../../interfaces/Ticket';
import { CreateTicket } from '../../interfaces/CreateTicket';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketService {

  private http = inject(HttpClient);
  private apiUrl = "http://localhost:5156/api/Ticket";

  getAll(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.apiUrl);
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
  
}
