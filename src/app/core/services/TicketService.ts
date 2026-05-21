import { Injectable,inject } from '@angular/core';
import { Ticket } from '../../interfaces/Ticket';
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
  
}
