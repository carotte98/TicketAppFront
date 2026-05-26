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
  imports: [
    SelectModule,
    InputGroupModule,
    InputGroupAddon,
    InputNumberModule,
    InputTextModule,
    FormsModule,
    Panel,
    ButtonModule,
    FloatLabelModule,
    AsyncPipe,
  ],
  providers: [AppService, TypeService, TicketService, Router],
  templateUrl: './form-creation.html',
  styleUrl: './form-creation.scss',
})
export class FormCreation implements OnInit {

  // PROVIDERS
  private varService = inject(GlobalVariables);
  private ticketService = inject(TicketService);
  private appService = inject(AppService);
  private typeService = inject(TypeService);
  private router = inject(Router);

  // LOCAL VARIABLES
  nameTicket: string | undefined;
  authorTicket: string | undefined;
  authorMsgTicket: string | undefined;
  appTicket: App | undefined;
  typeTicket: Type | undefined;

  // OBSERVABLES
  apps$ = this.appService.getAll();
  types$ = this.typeService.getAll();

  // ON INIT : sets the author as the current User
  ngOnInit() {

    this.authorTicket = this.varService.currentUser;
  }

  // ON SAVE: saves the new Ticket, applies the current dates and default values
  // Takes the User inputs and sends back to API
  // Sends back to HOME when done
  onSave() {

    let newTicket: CreateTicket = {
      nameTicket: this.nameTicket!,
      authorTicket: this.authorTicket!,
      authorMsgTicket: this.authorMsgTicket!,
      startdateTicket: new Date(),
      updateDateTicket: new Date(),
      appTicket: this.appTicket!.idApp,
      statusTicket: 1,
      typeTicket: this.typeTicket!.idTicketType,
    };

    this.ticketService.postTicket(newTicket).subscribe({
      next: (response) => {
        console.log('Ticket created', response);
      },
      error: (err) => {
        console.error('API error', err);
      },
    });

    this.router.navigate(['']);
  }

  // Sends back to HOME
  onCancel() {
    this.router.navigate(['']);
  }
}
