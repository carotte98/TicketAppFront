import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Panel } from 'primeng/panel';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { Type } from '../../interfaces/Type';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { GlobalVariables } from '../../core/services/global-variables';
import { AppService } from '../../core/services/app-service';
import { TypeService } from '../../core/services/type-service';
import { AsyncPipe } from '@angular/common';
import { TicketService } from '../../core/services/TicketService';
import { CreateTicket } from '../../interfaces/CreateTicket';
import { Router } from '@angular/router';
import { App } from '../../interfaces/App';

@Component({
  selector: 'app-consultation',
  imports: [SelectModule, InputGroupModule, InputGroupAddon, InputNumberModule,
     InputTextModule, FormsModule, Panel, ButtonModule, FloatLabelModule, AsyncPipe],
     providers: [AppService, TypeService, TicketService, Router],
  templateUrl: './consultation.html',
  styleUrl: './consultation.scss',
})
export class Consultation {
  private varService = inject(GlobalVariables);
  private ticketService = inject(TicketService);
  private appService = inject(AppService);
  private typeService = inject(TypeService);
  private router = inject(Router);
  

  nameTicket:string | undefined;
  authorTicket:string | undefined;
  authorMsgTicket:string | undefined;
  appTicket:App | undefined;
  typeTicket:Type | undefined;

  apps$ = this.appService.getAll();
  types$ = this.typeService.getAll();

  current$ = this.ticketService.getById(this.varService.currentId);

  

  ngOnInit() {

    this.current$.subscribe(ticket => {

    this.nameTicket = ticket.nameTicket;
    this.authorTicket = ticket.authorTicket;
    this.authorMsgTicket = ticket.authorMsgTicket;

    this.appTicket = ticket.appTicket;
    this.typeTicket = ticket.typeTicket;

    });
  }

  onCancel(){this.router.navigate(['']);}

}

