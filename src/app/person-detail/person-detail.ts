import { Component, inject, input, signal, effect } from '@angular/core';
import { Person } from '../models/types';
import { PeopleApi } from '../people-api';

@Component({
  imports: [],
  selector: 'app-person-detail',
  styleUrl: './person-detail.css',
  templateUrl: './person-detail.html',
})
export class PersonDetail {
 person = signal<Person | undefined>(undefined);
service= inject(PeopleApi);
loading = signal(true);
 id = input.required<string>();

  constructor() {
     effect(() =>  this.loadPerson(this.id()))
  }

async loadPerson(id: string): Promise<void> {
    try {
      const people = await this.service.getAll();
      const resultperson =  people.find((p) => p.id.value === id);
      this.person.set(resultperson);
      
    } catch (error) {
      console.error('Erreur lors du chargement :', error);
    } finally {
      this.loading.set(false);
    }

  }
}
