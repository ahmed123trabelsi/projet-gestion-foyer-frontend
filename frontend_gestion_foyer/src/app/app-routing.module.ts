import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Home/home/home.component";
import {SignInComponent} from "./Home/views/sign-in/sign-in.component";
import {SignUpComponent} from "./Home/views/sign-up/sign-up.component";
import {EtudiantComponent} from "./Utilisateur/Interface_principale/etudiant/etudiant.component";
import {NotfoundComponent} from "./Utilisateur/notfound/notfound.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'signIn', component: SignInComponent},
  { path:'signUp' , component : SignUpComponent},
  {path :'dashboard' , loadChildren: ()=>import('./dashboard/dashboard.module').then((m) => m.DashboardModule)},
  {path: 'etudiant', component: EtudiantComponent, children: [
          {path: 'etudiant', loadChildren: () => import('./Utilisateur/user.module').then((m) => m.UserModule),}]
      },
  // {path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
