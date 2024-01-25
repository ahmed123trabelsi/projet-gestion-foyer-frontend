import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './Interface_Principale/dashboard.component';
import { ListEtudiantComponent } from './Etudiant/list-etudiant/list-etudiant.component';
import { AadEtudiantComponent } from './Etudiant/aad-etudiant/aad-etudiant.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateEtudiantComponent } from './Etudiant/update-etudiant/update-etudiant.component';
import { AjouterBlocComponent } from './Bloc/ajouter-bloc/ajouter-bloc.component';
import { ChambreComponent } from './Chambre/chambre/chambre.component';
import { UniversiteComponent } from './Universite/universite/universite.component';
import { FoyerComponent } from './foyer/foyer/foyer.component';
import { UpdateUnivComponent } from './Universite/update-univ/update-univ.component';
import { DetailEtudiantComponent } from './Etudiant/detail-etudiant/detail-etudiant.component';
import { UpdatefoyerComponent } from './foyer/updatefoyer/updatefoyer.component';
import { UpdateblocComponent } from './Bloc/updatebloc/updatebloc.component';
import { UpdatechambreComponent } from './Chambre/updatechambre/updatechambre.component';
import { ReservationComponent } from './reservation/reservation/reservation.component';
import { AddresComponent } from './reservation/addres/addres.component';
import { EditPopComponent } from './foyer/edit-pop/edit-pop.component';
import { EditPopUnivComponent } from './Universite/edit-pop-univ/edit-pop-univ.component';
import { FilterbynomPipe } from './Etudiant/filterbynom.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ListEtudiantComponent,
    AadEtudiantComponent,
    UpdateEtudiantComponent,
    AjouterBlocComponent,
    ChambreComponent,
    UniversiteComponent,
    FoyerComponent,
    UpdateUnivComponent,
    DetailEtudiantComponent,
    UpdatefoyerComponent,
    UpdateblocComponent,
    UpdatechambreComponent,
    ReservationComponent,
    AddresComponent,
    EditPopComponent,
    EditPopUnivComponent,
    FilterbynomPipe,
    PagenotfoundComponent,



  ],
    imports: [
        CommonModule,
        FormsModule,
        DashboardRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class DashboardModule { }
