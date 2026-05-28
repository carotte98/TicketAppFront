import { Component, computed, signal, OnInit, inject } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { GlobalVariables } from '../../core/services/global-variables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barre-navigation',
  imports: [MenubarModule],
  templateUrl: './barre-navigation.html',
  styleUrl: './barre-navigation.scss',
})
export class BarreNavigation implements OnInit {
  items: MenuItem[] | undefined;

  // PROVIDERS
  private varService = inject(GlobalVariables);
  private router = inject(Router);

  // LOCAL VARIABLES
  currentUser = signal('Stephane');
  userLabel = computed(() => `Bonjour ${this.currentUser()}`);

  // ON INIT
  // Sets up the navbar, the DEV and User buttons set the current User, Role and reloads the All Table
  ngOnInit() {
    this.items = [
      
      {
        label: 'Developpeurs',
        icon: 'pi pi-user-edit',
        items: [
          {
            label: 'Brahim',
            command: () => {
              this.varService.currentUser = 'Brahim';
              this.currentUser.set('Brahim');
              this.varService.setRole('Dev');
              this.router.navigate(['']);
            },
          },
          {
            label: 'Benoît',
            command: () => {
              this.varService.currentUser = 'Benoît';
              this.currentUser.set('Benoît');
              this.varService.setRole('Dev');
              this.router.navigate(['']);
            },
          },
          {
            label: 'Stephane',
            command: () => {
              this.varService.currentUser = 'Stephane';
              this.currentUser.set('Stephane');
              this.varService.setRole('Responsable');
              this.router.navigate(['']);
            },
          },
        ],
      },
      {
        label: 'Utilisateurs',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Maxime',
            command: () => {
              this.varService.currentUser = 'Maxime';
              this.currentUser.set('Maxime');
              this.varService.setRole('User');
              this.router.navigate(['']);
            },
          },
          {
            label: 'Alex',
            command: () => {
              this.varService.currentUser = 'Alex';
              this.currentUser.set('Alex');
              this.varService.setRole('User');
              this.router.navigate(['']);
            },
          },
          {
            label: 'Jean',
            command: () => {
              this.varService.currentUser = 'Jean';
              this.currentUser.set('Jean');
              this.varService.setRole('User');
              this.router.navigate(['']);
            },
          },
        ],
      },
    ];
  }
}
