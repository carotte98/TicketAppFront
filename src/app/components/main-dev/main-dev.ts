import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TableAll } from '../table-all/table-all';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-main-dev',
  imports: [PanelModule, TableAll, ButtonModule],
  templateUrl: './main-dev.html',
  styleUrl: './main-dev.scss',
})
export class MainDev {}
