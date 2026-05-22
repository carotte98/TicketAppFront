import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariables {

  public currentUser:string = "Brahim";

  private roleSubject = new BehaviorSubject<string>("Dev");
  currentRole$ = this.roleSubject.asObservable();

  public currentId:number = 0;

  setRole(role: string) {
    this.roleSubject.next(role);
  }

  getRoleValue() {
    return this.roleSubject.value;
  }
}
