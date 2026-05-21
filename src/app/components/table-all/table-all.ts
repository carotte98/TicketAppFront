import { Component, OnInit, inject } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { TicketService } from '../../core/services/TicketService';
import { Ticket } from '../../interfaces/Ticket';
import { ChangeDetectorRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-table-all',
  standalone: true,
  imports: [TableModule, AsyncPipe],
  providers: [TicketService],
  templateUrl: './table-all.html',
  styleUrl: './table-all.scss',
})
export class TableAll implements OnInit {
  private ticketService = inject(TicketService);
  private cdr = inject(ChangeDetectorRef);

  tickets$ = this.ticketService.getAll();

  ngOnInit(){
    
    

  }
}
