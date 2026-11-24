import { Component, signal, inject } from '@angular/core';
import { PeopleApi } from '../people-api';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  numberPerson = signal<number>(0);
  service = inject(PeopleApi);

 async ngOnInit(): Promise<void> {
    const resultpeople = await this.service.getAll();
    const numberPersonApi = resultpeople.length;
    this.numberPerson.set(numberPersonApi);
  }
}