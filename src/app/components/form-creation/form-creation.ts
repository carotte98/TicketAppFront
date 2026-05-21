import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Panel } from 'primeng/panel';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { App } from '../../app';
import { Status } from '../../interfaces/Status';
import { Type } from '../../interfaces/Type';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { GlobalVariables } from '../../core/services/global-variables';
import { AppService } from '../../core/services/app-service';
import { TypeService } from '../../core/services/type-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-form-creation',
  standalone: true,
  imports: [SelectModule, InputGroupModule, InputGroupAddon, InputNumberModule,
     InputTextModule, FormsModule, Panel, ButtonModule, FloatLabelModule, AsyncPipe],
     providers: [GlobalVariables, AppService, TypeService],
  templateUrl: './form-creation.html',
  styleUrl: './form-creation.scss',
})
export class FormCreation implements OnInit {

  private varService = inject(GlobalVariables);
  private appService = inject(AppService);
  private typeService = inject(TypeService);
  

  idTicket:number | undefined;
  nameTicket:string | undefined;
  authorTicket:string | undefined;
  authorMsgTicket:string | undefined;
  devTicket:string | undefined;
  devMsgTicket:string | undefined;
  startdateTicket:Date | undefined;
  updateDateTicket:Date | undefined;
  appTicket:App | undefined;
  statusTicket:Status | undefined;
  typeTicket:Type | undefined;

  apps$ = this.appService.getAll();
  types$ = this.typeService.getAll();

  

  ngOnInit() {
    
    this.authorTicket = this.varService.currentUser;

    this.types$.subscribe(data => console.log(data));

    console.log(this.apps$);
    console.log(this.types$);

  }
}
