
import { Component, signal, inject } from '@angular/core';

import {
  form,
  FormField,
  FormRoot,
  min,
  max,
  minLength,
  required,
  email
} from '@angular/forms/signals';

import { PeopleApi } from '../people-api';
import { NewPerson, Person} from '../models/types';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-add-contact',
  styleUrl: './add-contact.css',
  templateUrl: './add-contact.html',
})
export class AddContact {

  person = signal<NewPerson>({
    firstname: '',lastname: '', gender: '', age: 1, email: '', phone: '', city: ''});

  personForm = form(this.person, (path) => {

    required(path.firstname, { message: 'Le prénom est obligatoire.'});
     minLength(path.firstname, 2, { message: '2 caractères au moins.'});

    required(path.lastname, { message: 'Le nom est obligatoire.'});

    min(path.age, 1, { message: "L'âge minimum est de 1 an."});

    max(path.age, 120, { message: "L'âge maximum est de 120 ans."});

    required(path.email, { message: "L'email est obligatoire."});

    email(path.email, { message: "L'email doit être au bon format." });

    required(path.city, { message: 'La ville est obligatoire.' });

  }, {submission: { action: async () => this.send() }});

  created = signal<Person | null>(null);
  error = signal<string | null>(null);

  peopleApi = inject(PeopleApi);

  async send(): Promise<void> {
  this.error.set(null);

  try {
    const dataPerson = this.person();

    const newPerson: Person = {
      id: {
        value: ''
      },
      name: {
        title: '',
        first: dataPerson.firstname,
        last: dataPerson.lastname
      },
      location: {
        city: dataPerson.city
      },
      picture: {
        large: ''
      },
      dob: {
        age: dataPerson.age
      },
      phone: dataPerson.phone,
      email: dataPerson.email
    };

    this.created.set(await this.peopleApi.add(newPerson));

    this.personForm().reset();

  } catch {
    this.error.set("L'envoi a échoué. Réessaie dans un instant.");
  }
}}