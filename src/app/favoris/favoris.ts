import { Component, inject } from '@angular/core';
import {ServicePerson} from '../service-person';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-favoris',
  styleUrl: './favoris.css',
  templateUrl: './favoris.html',
})
export class Favoris {
  servicePerson = inject(ServicePerson);
}
