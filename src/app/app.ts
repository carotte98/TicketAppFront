import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarreNavigation } from './components/barre-navigation/barre-navigation';
import { MainDev } from "./components/main-dev/main-dev";
import { FormCreation } from "./components/form-creation/form-creation";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarreNavigation, MainDev, FormCreation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TicketWebsite');
}
