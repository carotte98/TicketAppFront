import { Component, OnInit } from '@angular/core';
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
                        label: 'Brahim'
                    },
                    {
                        label: 'Benoît'
                    },
                    {
                        label: 'Stephane'
                    }
                ]
            },
            {
                label: 'Utilisateurs',
                icon: 'pi pi-user',
                items: [
                    {
                        label: 'Maxime'
                    },
                    {
                        label: 'Alex'
                    },
                    {
                        label: 'Jean'
                    }
                ]
            }
        ];
    }
}
