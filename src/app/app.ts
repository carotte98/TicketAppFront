import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarreNavigation } from './components/barre-navigation/barre-navigation';
import { MainDev } from "./components/main-dev/main-dev";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarreNavigation, MainDev],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TicketWebsite');
}
