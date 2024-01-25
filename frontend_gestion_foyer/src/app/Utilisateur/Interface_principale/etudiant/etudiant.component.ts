import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EtudiantService} from "../../../core/service/Etudiant/etudiant.service";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{
  loggedInUserName!: string;
  loggedInUserId!: number; // assuming id is a number

  constructor(private route :Router,
              private etudiantService: EtudiantService,
              private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    // Récupérez le nom depuis le local storage
    const userString = localStorage.getItem('user');

    if (userString !== null) {
      const user = JSON.parse(userString);

      // Assurez-vous que user et user.nom ne sont pas null avant de les utiliser
      if (user && user.nom !== null && user.prenom !== null) {
        // Utilisez le nom et le prénom pour l'affichage
        this.loggedInUserName = `${user.prenom} ${user.nom}`;
        this.loggedInUserId = user.id;
      }
    }
  }

  logout() {
    // Videz le localStorage et redirigez l'utilisateur vers la page de connexion
    localStorage.clear();
  }



}
