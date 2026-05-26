import { Component, inject, OnInit, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TicketService } from '../../core/services/TicketService';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { GlobalVariables } from '../../core/services/global-variables';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Badge } from "primeng/badge";
import { Status } from '../../interfaces/Status';

@Component({
  selector: 'app-table-all',
  standalone: true,
  imports: [TableModule, AsyncPipe, ButtonModule, Badge],
  providers: [TicketService],
  templateUrl: './table-all.html',
  styleUrl: './table-all.scss',
})
export class TableAll implements OnInit{
  private ticketService = inject(TicketService);
  private varService = inject(GlobalVariables);
  private router = inject(Router);

  
  tickets$ = this.varService.currentRole$.pipe(
  switchMap(role => {
    if (role === 'Dev') {
      return this.ticketService.getAllByDev(this.varService.currentUser);
    }

    if (role === 'Responsable') {
      return this.ticketService.getAll();
    }

    return this.ticketService.getAllByAuthor(this.varService.currentUser);
  }));



  Role$ = this.varService.currentRole$;

  ngOnInit(){

    
    
  }

  statusAffichage(status: Status) {
        if (status.name === "TERMINE             ") return "TERMINE";
        else if (status.name === "PRIS EN CHARGE      ") return "PROGRES";
        else return "ATTENTE";
    }

  statusSeverity(status: Status) {
        if (status.name === "TERMINE             ") return 'danger';
        else if (status.name === "PRIS EN CHARGE      ") return 'warn';
        else return 'success';
    }



  onClick(id:any){
    console.log(id)
    this.varService.currentId = id;
    this.router.navigate(['consult']);

  }
}
