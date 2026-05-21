import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Panel } from 'primeng/panel';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { App } from '../../interfaces/App';
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

@Component({
  selector: 'app-form-creation',
  standalone: true,
  imports: [SelectModule, InputGroupModule, InputGroupAddon, InputNumberModule,
     InputTextModule, FormsModule, Panel, ButtonModule, FloatLabelModule, AsyncPipe],
     providers: [AppService, TypeService, TicketService, Router],
  templateUrl: './form-creation.html',
  styleUrl: './form-creation.scss',
})
export class FormCreation implements OnInit {

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

  

  ngOnInit() {

    console.log(this.varService.currentUser);
    
    this.authorTicket = this.varService.currentUser;

    this.types$.subscribe(data => console.log(data));

  }

  onSave(){

    console.log("click");
    console.log(this.typeTicket)

    let newTicket:CreateTicket = {
      nameTicket: this.nameTicket!,
      authorTicket: this.authorTicket!,
      authorMsgTicket: this.authorMsgTicket!,
      startdateTicket: new Date(),
      updateDateTicket: new Date(),
      appTicket: this.appTicket!.idApp,
      statusTicket: 1,
      typeTicket: this.typeTicket!.idTicketType,
    }

    console.log(newTicket);

    this.ticketService.postTicket(newTicket).subscribe({
      next: (response) => {
        console.log('Ticket created', response);
      },
      error: (err) => {
        console.error('API error', err);
      }
    });

    this.router.navigate(['']);
  
  }

  onCancel(){this.router.navigate(['']);}
}
