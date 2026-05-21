import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariables {

  public currentUser:string = "Brahim";
  public currentRole:string = "dev";
  public currentId:number = 0;
}
