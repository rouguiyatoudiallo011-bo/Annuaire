import { Component, signal, inject } from '@angular/core';
import { Person } from '../models/types';
import { PeopleApi } from '../people-api';
import { RouterLink } from '@angular/router';
import { ServicePerson } from '../service-person';



@Component({
  imports: [RouterLink],
  selector: 'app-people-list',
  styleUrl: './people-list.css',
  templateUrl: './people-list.html',
})
export class PeopleList {
  people = signal<Person[]>([]);
  service = inject(PeopleApi);
  servicePerson = inject(ServicePerson);

  async ngOnInit(): Promise<void> {
    const resultpeople = await this.service.getAll();
    this.people.set(resultpeople);
  }


favorites = signal<Set<string>>(new Set());

toggleFavorite(person: Person) {
  const id = person.id.value;

  this.favorites.update(favorites => {
    const updated = new Set(favorites);

    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
      this.servicePerson.addfavoris(person);
    }

    return updated;
  });
}

isFavorite(id: string): boolean {
  return this.favorites().has(id);
} }
