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
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-consultation',
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
    MessageModule,
  ],
  providers: [AppService, TypeService, TicketService, Router],
  templateUrl: './consultation.html',
  styleUrl: './consultation.scss',
})
export class Consultation {
  // PROVIDERS
  private varService = inject(GlobalVariables);
  private ticketService = inject(TicketService);
  private appService = inject(AppService);
  private typeService = inject(TypeService);
  private statusService = inject(StatusService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  // LOCALS
  nameTicket: string | undefined;
  authorTicket: string | undefined;
  authorMsgTicket: string | undefined;
  typeTicket!: number;
  statusTicket!: number;
  appTicket!: number;
  devTicket: string | undefined;
  devMsgTicket: string | undefined;

  // OBSERVABLES
  apps$ = this.appService.getAll();
  types$ = this.typeService.getAll();
  status$ = this.statusService.getAll();

  Role$ = this.varService.currentRole$;

  current$ = this.ticketService.getById(this.varService.currentId);

  // VARIABLES DE VALIDATIONS
  valTypeTicket: boolean | undefined;
  valStatusTicket: boolean | undefined;
  valDevTicket: boolean | undefined;
  valeDevMsg: boolean | undefined;

  // INIT: Fills the locals with their values
  ngOnInit() {
    this.current$.subscribe((ticket) => {
      this.nameTicket = ticket.nameTicket;
      this.authorTicket = ticket.authorTicket;
      this.authorMsgTicket = ticket.authorMsgTicket;
      this.devTicket = ticket.devTicket;
      this.devMsgTicket = ticket.devMsgTicket;

      this.appTicket = ticket.appTicket.id;
      this.typeTicket = ticket.typeTicket.id;
      this.statusTicket = ticket.statusTicket.id;

      this.cdr.detectChanges();
    });
  }

  // VALIDATION OF FORM
  onValidate(): boolean {
    let flag = false;

    // RESETING FLAGS
    this.valTypeTicket = false;
    this.valStatusTicket = false;
    this.valDevTicket = false;
    this.valeDevMsg = false;

    // Status has to be selected
    if (this.statusTicket === undefined) {
      flag = true;
      this.valStatusTicket = true;
    }

    // If Supervisor ==> check that a dev has been assigned
    if (this.varService.getRoleValue() === 'Responsable') {
      if (this.devTicket === null || this.devTicket!.length < 3) {
        flag = true;
        this.valDevTicket = true;
      }
    }

    // Check that the message to the user isn't blank and over 5 chars
    if (this.devMsgTicket === null || this.devMsgTicket!.length < 5) {
      flag = true;
      this.valeDevMsg = true;
    }

    // Check a Type is selected 
    if (this.typeTicket === undefined) {
      flag = true;
      this.valTypeTicket = true;
    }

    return flag;
  }

  // Update Ticket
  onSave() {

    // If Validation Succeeds
    if (!this.onValidate()) {

      let newTicket: UpdateTicket = {
        devTicket: this.devTicket!,
        devMsgTicket: this.devMsgTicket!,
        authorMsgTicket: this.authorMsgTicket!,
        updateDateTicket: new Date(),
        idStatusTicket: this.statusTicket,
        idTypeTicket: this.typeTicket,
      };

      this.ticketService.putTicket(newTicket, this.varService.currentId).subscribe({
        next: (response) => {
          console.log('Ticket updated', response);
        },
        error: (err) => {
          console.error('API error', err);
        },
      });

      // Sends back to HOME
      this.router.navigate(['']);
    }
  }

  // Sends back to HOME
  onCancel() {
    this.router.navigate(['']);
  }
}
