import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from '../../interfaces/Status';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:5156/api/Status";

  getAll(): Observable<Status[]>{
      return this.http.get<Status[]>(this.apiUrl);
  }
}
