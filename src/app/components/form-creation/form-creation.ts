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
import { MessageModule } from 'primeng/message';

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
    MessageModule,
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

  // LOCALS
  nameTicket:string | undefined;
  authorTicket:string | undefined;
  authorMsgTicket:string | undefined;
  appTicket!: number;
  typeTicket!: number;

  // OBSERVABLES
  apps$ = this.appService.getAll();
  types$ = this.typeService.getAll();

  // VARIABLES DE VALIDATIONS
  valNameTicket: boolean | undefined;
  valAuthorTicket: boolean | undefined;
  valAuthorMsgTicket: boolean | undefined;
  valAppTicket: boolean | undefined;
  valTypeTicket: boolean | undefined;

  
  // INIT: Sets the author to the current User
  ngOnInit() {

    this.authorTicket = this.varService.currentUser;
  }

  // FORM VALIDATION
  onValidate():boolean{

    let flag = false;

    // Reseting flags
    this.valNameTicket = false;
    this.valAuthorTicket = false;
    this.valAuthorMsgTicket = false;
    this.valAppTicket = false;
    this.valTypeTicket = false;

    // Name of ticket has to be filled and over 3 chars
    if(this.nameTicket === undefined || this.nameTicket!.length < 3){
      flag = true;
      this.valNameTicket = true;
    }

    // Author of ticket has to be filled and over 3 chars
    if(this.authorTicket === undefined || this.authorTicket!.length < 3){
      flag = true;
      this.valAuthorTicket = true;
    }

    // Message of ticket has to be filled and over 5 chars
    if(this.authorMsgTicket === undefined || this.authorMsgTicket!.length < 5){
      flag = true;
      this.valAuthorMsgTicket = true;
    }

    // An app has to be selected
    if(this.appTicket === undefined){
      flag = true;
      this.valAppTicket = true;
    }

    // A type has to be selected
    if(this.typeTicket === undefined){
      flag = true;
      this.valTypeTicket = true;
    }

    return flag;
  }

  // Creates a new Ticket
  onSave(){

    // If Validation succeeded 
    if(!this.onValidate()){

      // Taking the validated Inputs
      // Using the current Date for the start and update Dates
      // Status is set to "EN ATTENTE" (1)
      let newTicket:CreateTicket = {
        nameTicket: this.nameTicket!,
        authorTicket: this.authorTicket!,
        authorMsgTicket: this.authorMsgTicket!,
        startdateTicket: new Date(),
        updateDateTicket: new Date(),
        appTicket: this.appTicket,
        statusTicket: 1,
        typeTicket: this.typeTicket,
      }

      this.ticketService.postTicket(newTicket).subscribe({
        next: (response) => {
          console.log('Ticket created', response);
        },
        error: (err) => {
          console.error('API error', err);
        }
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
