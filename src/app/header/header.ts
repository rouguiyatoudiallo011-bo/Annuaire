import { Component, signal, inject } from '@angular/core';
import { PeopleApi } from '../people-api';
import {ServicePerson} from'../service-person';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  numberPerson = signal<number>(0);
  service = inject(PeopleApi);
  servicePerson = inject(ServicePerson);

 async ngOnInit(): Promise<void> {
    const resultpeople = await this.service.getAll();
    const numberPersonApi = resultpeople.length;
    this.numberPerson.set(numberPersonApi);
  }
}