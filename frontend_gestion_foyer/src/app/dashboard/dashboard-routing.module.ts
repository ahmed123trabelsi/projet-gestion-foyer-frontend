import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Interface_Principale/dashboard.component';
import {ListEtudiantComponent} from "./Etudiant/list-etudiant/list-etudiant.component";
import {AadEtudiantComponent} from "./Etudiant/aad-etudiant/aad-etudiant.component";
import {UpdateEtudiantComponent} from "./Etudiant/update-etudiant/update-etudiant.component";
import {AjouterBlocComponent} from "./Bloc/ajouter-bloc/ajouter-bloc.component";
import {ChambreComponent} from "./Chambre/chambre/chambre.component";
import {UniversiteComponent} from "./Universite/universite/universite.component";
import {FoyerComponent} from "./foyer/foyer/foyer.component";
import {UpdateUnivComponent} from "./Universite/update-univ/update-univ.component";
import {EtudiantComponent} from "../Utilisateur/Interface_principale/etudiant/etudiant.component";
import {UpdatefoyerComponent} from "./foyer/updatefoyer/updatefoyer.component";
import {UpdateblocComponent} from "./Bloc/updatebloc/updatebloc.component";
import {UpdatechambreComponent} from "./Chambre/updatechambre/updatechambre.component";
import {ReservationComponent} from "./reservation/reservation/reservation.component";
import {AddresComponent} from "./reservation/addres/addres.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";

const routes: Routes = [

  { path: '', component: DashboardComponent ,children :[
      { path: '',redirectTo:'ajouteUniversite', pathMatch:'full' },
      { path: 'Listetudiant', component: ListEtudiantComponent },
      { path: 'addetudiant', component: AadEtudiantComponent },
      { path: 'etudiant/update/:id', component: UpdateEtudiantComponent },
      { path: 'add_etudiant', component: AadEtudiantComponent },
      {path:'ajouterBloc' , component: AjouterBlocComponent},
      {path:'ajouterChambre' , component : ChambreComponent},
      {path:'ajouteUniversite' , component:UniversiteComponent},
      {path:'ajouteFoyer' , component:FoyerComponent},
      {path:'updateUniv/:idUniversite' , component : UpdateUnivComponent},
      {path:'updateFoyer/:idFoyer' , component : UpdatefoyerComponent},
      {path:'updateBloc/:idBloc' , component : UpdateblocComponent},
      {path:'updateChambre/:idChambre' , component : UpdatechambreComponent},
      {path:'res' , component : ReservationComponent},
      {path:'addres' , component :AddresComponent},
    ]}]

;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
