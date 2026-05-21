import { Component, inject } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TableAll } from '../table-all/table-all';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-dev',
  imports: [PanelModule, TableAll, ButtonModule],
  providers: [Router],
  templateUrl: './main-dev.html',
  styleUrl: './main-dev.scss',
})
export class MainDev {

  private router = inject(Router);

  onClick(){
    this.router.navigate(['forms'])
  }
}
