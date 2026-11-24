import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeopleList } from './people-list/people-list';
import { Header } from '../app/header/header';


@Component({
  imports: [RouterOutlet, PeopleList, Header ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('annuaire');
}
