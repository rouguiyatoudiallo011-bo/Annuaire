import { Routes } from '@angular/router';
import { PersonDetail } from './person-detail/person-detail';
import { NotFound } from './not-found/not-found';
import {PeopleList} from'../app/people-list/people-list';
import {Favoris} from '../app/favoris/favoris';
import { AddContact } from './add-contact/add-contact';

export const routes: Routes = [
     {
    path: '', component: PeopleList
  },

    {
    path: 'personnes/:id', component: PersonDetail
  },
 {
    path: 'annuaire', component: PeopleList
  },
    {
    path: 'favoris', component: Favoris
  },
  {
    path: 'ajouter', component: AddContact
  },
     { path: '**', component: NotFound }

];
