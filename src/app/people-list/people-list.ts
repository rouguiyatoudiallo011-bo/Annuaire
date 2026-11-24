import { Component, signal, inject } from '@angular/core';
import { Person } from '../models/types';
import { PeopleApi } from '../people-api';
import { RouterLink } from '@angular/router';



@Component({
  imports: [RouterLink],
  selector: 'app-people-list',
  styleUrl: './people-list.css',
  templateUrl: './people-list.html',
})
export class PeopleList {
  people = signal<Person[]>([]);
  service = inject(PeopleApi);

  async ngOnInit(): Promise<void> {
    const resultpeople = await this.service.getAll();
    this.people.set(resultpeople);
  }

}
