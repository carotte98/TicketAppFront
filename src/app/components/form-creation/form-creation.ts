import { Component } from '@angular/core';
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

@Component({
  selector: 'app-form-creation',
  standalone: true,
  imports: [SelectModule, InputGroupModule, InputGroupAddon, InputNumberModule,
     InputTextModule, FormsModule, Panel, ButtonModule, FloatLabelModule],
  templateUrl: './form-creation.html',
  styleUrl: './form-creation.scss',
})
export class FormCreation {
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

  apps: string[]=["TestApp", "Cisco"];
  types: string[]=["EN ATTENTE", "FINI"];
}
