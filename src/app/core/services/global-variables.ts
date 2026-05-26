import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariables {
  public currentUser: string = 'Brahim';

  // CREATES AN OBSERVABLE ROLE
  private roleSubject = new BehaviorSubject<string>('Dev');
  currentRole$ = this.roleSubject.asObservable();

  public currentId: number = 0;

  // SETS A NEW ROLE
  setRole(role: string) {
    this.roleSubject.next(role);
  }

  // GET THE ROLE
  getRoleValue() {
    return this.roleSubject.value;
  }
}
