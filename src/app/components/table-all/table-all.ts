import { Component, inject, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TicketService } from '../../core/services/TicketService';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { GlobalVariables } from '../../core/services/global-variables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-all',
  standalone: true,
  imports: [TableModule, AsyncPipe, ButtonModule],
  providers: [TicketService],
  templateUrl: './table-all.html',
  styleUrl: './table-all.scss',
})
export class TableAll {
  private ticketService = inject(TicketService);
  private varService = inject(GlobalVariables);
  private router = inject(Router);

  tickets$ = this.ticketService.getAll();
  Role$ = this.varService.currentRole$;

  



  onClick(id:any){
    console.log(id)
    this.varService.currentId = id;
    this.router.navigate(['consult']);

  }
}
