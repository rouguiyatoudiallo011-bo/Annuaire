import { Service, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import {Person ,PeopleResponse} from '../app/models/types';


@Service()
export class PeopleApi {

    private readonly http = inject(HttpClient);
    private readonly url = "https://randomuser.me/api/?seed=cda2&results=30&nat=fr";
    loading = signal(true);
     people = signal<Person[]>([]);
    
   

    async getAll(): Promise<Person[]> {
        try {
            const response = await firstValueFrom(this.http.get<PeopleResponse>(`${this.url}`));

            return response.results;
        }
        catch (error) {
            console.error('Erreur lors du chargement :', error);
            return [];
        }
         finally {
            this.loading.set(false);
        }


    }

    

  async add(person: Person): Promise<Person> {

  this.people.update(people => [...people, person]);

  return person;
}
   
}
