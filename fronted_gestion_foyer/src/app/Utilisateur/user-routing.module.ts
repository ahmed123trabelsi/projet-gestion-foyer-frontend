import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EtudiantComponent} from "./Interface_principale/etudiant/etudiant.component";
import {UniversiteComponent} from "./Universite/universite/universite.component";
import {UpdateUnivComponent} from "../dashboard/Universite/update-univ/update-univ.component";
import {UpdateprofilComponent} from "./Etudiant/updateprofil/updateprofil.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  { path: '', component: EtudiantComponent ,children :[
      {path:'',redirectTo:'etudiant', pathMatch:"full"},

      {path:"listUniv" , component : UniversiteComponent},
      {path:'updateP/:id' , component : UpdateprofilComponent},
    ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
