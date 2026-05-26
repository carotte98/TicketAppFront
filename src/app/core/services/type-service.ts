import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from '../../interfaces/Type';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:5156/api/TicketType";

  // SENDS BACK ALL TYPES
  getAll(): Observable<Type[]>{
      return this.http.get<Type[]>(this.apiUrl);
  }
}
