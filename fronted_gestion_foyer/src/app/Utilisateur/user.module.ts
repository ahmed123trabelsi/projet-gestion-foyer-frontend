import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {EtudiantComponent} from "./Interface_principale/etudiant/etudiant.component";
import { UniversiteComponent } from './Universite/universite/universite.component';
import { UpdateprofilComponent } from './Etudiant/updateprofil/updateprofil.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    EtudiantComponent,
    UniversiteComponent,
    UpdateprofilComponent,
    PagenotfoundComponent,
    NotfoundComponent


  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class UserModule { }
