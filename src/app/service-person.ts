import { Service, signal, inject } from '@angular/core';
import{Person} from '../app/models/types';
import { PeopleApi } from './people-api';

@Service()
export class ServicePerson {
    peoplefavoris= signal<Person[]>([]);
    countFavoris = signal<number>(0); 
    serviceApi= inject(PeopleApi)

    addfavoris(person: Person): void {
       this.peoplefavoris.set([...this.peoplefavoris(), person ]);
       this.countFavoris.update(count => count + 1);
    }

}
