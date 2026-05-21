import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { App } from '../../interfaces/App';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:5156/api/App";

  getAll(): Observable<App[]>{
      return this.http.get<App[]>(this.apiUrl);
  }
}
