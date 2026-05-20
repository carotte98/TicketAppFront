import { Component, computed, signal, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-barre-navigation',
  imports: [MenubarModule],
  templateUrl: './barre-navigation.html',
  styleUrl: './barre-navigation.scss',
})
export class BarreNavigation implements OnInit {
  items: MenuItem[] | undefined;
  currentUser = signal("Brahim");

  userLabel = computed(() => `Bonjour ${this.currentUser()}`);

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home'
          },
          {
              label: 'Developpeurs',
              icon: 'pi pi-user-edit',
              items: [
                  {
                      label: 'Brahim',
                      command: () => { this.currentUser.set("Brahim") }
                  },
                  {
                      label: 'Benoît',
                      command: () => { this.currentUser.set("Benoît") }
                  },
                  {
                      label: 'Stephane',
                      command: () => { this.currentUser.set("Stephane") }
                  }
              ]
          },
          {
              label: 'Utilisateurs',
              icon: 'pi pi-user',
              items: [
                  {
                      label: 'Maxime',
                      command: () => { this.currentUser.set("Maxime") }
                  },
                  {
                      label: 'Alex',
                      command: () => { this.currentUser.set("Alex") }
                  },
                  {
                      label: 'Jean',
                      command: () => { this.currentUser.set("Jean") }
                  }
              ]
          }
      ];
  }
}
