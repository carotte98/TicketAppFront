import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Panel } from 'primeng/panel';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { GlobalVariables } from '../../core/services/global-variables';
import { AppService } from '../../core/services/app-service';
import { TypeService } from '../../core/services/type-service';
import { AsyncPipe } from '@angular/common';
import { TicketService } from '../../core/services/TicketService';
import { Router } from '@angular/router';
import { StatusService } from '../../core/services/status-service';
import { UpdateTicket } from '../../interfaces/UpdateTicket';
import { App } from '../../interfaces/App';
import { Type } from '../../interfaces/Type';
import { Status } from '../../interfaces/Status';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-consultation',
  imports: [SelectModule, InputGroupModule, InputGroupAddon, InputNumberModule,
     InputTextModule, FormsModule, Panel, ButtonModule, FloatLabelModule, AsyncPipe, MessageModule],
     providers: [AppService, TypeService, TicketService, Router],
  templateUrl: './consultation.html',
  styleUrl: './consultation.scss',
})
export class Consultation {
  private varService = inject(GlobalVariables);
  private ticketService = inject(TicketService);
  private appService = inject(AppService);
  private typeService = inject(TypeService);
  private statusService = inject(StatusService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef)

  nameTicket:string | undefined;
  authorTicket:string | undefined;
  authorMsgTicket:string | undefined;
  appTicket:App | undefined;
  typeTicket:Type | undefined;
  statusTicket:Status | undefined;
  devTicket:string | undefined;
  devMsgTicket:string | undefined;

  apps$ = this.appService.getAll();
  types$ = this.typeService.getAll();
  status$ = this.statusService.getAll();

  current$ = this.ticketService.getById(this.varService.currentId);

  // VARIABLES DE VALIDATIONS
  valTypeTicket: boolean | undefined;
  valStatusTicket: boolean | undefined;
  valDevTicket: boolean | undefined;
  valeDevMsg: boolean | undefined;

  

  ngOnInit() {

    this.current$.subscribe(ticket => {

      this.nameTicket = ticket.nameTicket;
      this.authorTicket = ticket.authorTicket;
      this.authorMsgTicket = ticket.authorMsgTicket;
      this.devTicket = ticket.devTicket;
      this.devMsgTicket = ticket.devMsgTicket;

      this.appTicket = ticket.appTicket;
      this.typeTicket = ticket.typeTicket;
      this.statusTicket = ticket.statusTicket;
      
      this.cdr.detectChanges();
    });

    

    
  }

  onValidate():boolean{

    let flag = false;

    this.valTypeTicket = false;
    this.valStatusTicket = false;
    this.valDevTicket = false;
    this.valeDevMsg = false;

    console.log(this.statusTicket);
    console.log(this.typeTicket);

    if(this.statusTicket === null){
      flag = true;
      this.valStatusTicket = true;
    }

    if(this.devTicket === null || this.devTicket!.length < 3){
      flag = true;
      this.valDevTicket = true;
    }

    if(this.devMsgTicket === null || this.devMsgTicket!.length < 5){
      flag = true;
      this.valeDevMsg = true;
    }

    if(this.typeTicket === null){
      flag = true;
      this.valTypeTicket = true;
    }

    return flag;
  }

  onSave(){

    if(!this.onValidate()){
      console.log("click");
    

      let newTicket:UpdateTicket = {
        devTicket: this.devTicket!,
        devMsgTicket: this.devMsgTicket!,
        authorMsgTicket: this.authorMsgTicket!,
        updateDateTicket: new Date(),
        idStatusTicket: this.statusTicket!.idStatus,
        idTypeTicket: this.typeTicket!.idTicketType,
      }
      
      console.log(newTicket);

      console.log(newTicket);

      this.ticketService.putTicket(newTicket, this.varService.currentId).subscribe({
        next: (response) => {
          console.log('Ticket updated', response);
        },
        error: (err) => {
          console.error('API error', err);
        }
      });

      this.router.navigate(['']);
    }
  
  }

  onCancel(){this.router.navigate(['']);}

}

