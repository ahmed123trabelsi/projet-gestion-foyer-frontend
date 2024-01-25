import { Component } from '@angular/core';
import {ReservationService} from "../../../core/service/Reservation/reservation.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-addres',
  templateUrl: './addres.component.html',
  styleUrls: ['./addres.component.css']
})
export class AddresComponent {
// Propriétés pour stocker les valeurs des champs de formulaire
  numChambre!: number;
  cin!: number;
  cinEtudiant!: number;


  constructor(private reservationService: ReservationService,private R:Router) {
    // Injectez votre service dans le constructeur du composant
  }

  ajouterReservation() {
    // Appeler votre service pour ajouter une réservation avec les valeurs numChambre et cin

    this.reservationService.ajouterReservation(this.numChambre, this.cin)
      .subscribe(() => {

        // Réalisez les actions nécessaires après l'ajout de la réservation, si nécessaire
        alert('reservation ajoutée !');
        this.R.navigate(['res']);

        // Par exemple, réinitialisez les valeurs des champs de formulaire
        this.numChambre = 0;
        this.cin = 0;
        Swal.fire({
          icon: 'success',
          title: 'Ajoutée avec succès!',
          showConfirmButton: false,
          timer: 2000
        });
      }, error => {
        console.error('Erreur lors de l\'ajout de la réservation', error);
        // Gérez l'erreur ici (affichage d'un message, traitement spécifique, etc.)
      });

  }

  annulerReservation() {
    // Appeler votre service pour annuler une réservation avec la valeur cinEtudiant
    this.reservationService.annulerReservation(this.cinEtudiant)
      .subscribe(() => {
        // Réalisez les actions nécessaires après l'annulation de la réservation, si nécessaire
        alert('reservation annulé !');
        this.R.navigate(['reservation']);
        // Par exemple, réinitialisez les valeurs des champs de formulaire
        this.cinEtudiant = 0;
        Swal.fire({
          icon: 'success',
          title: 'reservation annulé!',
          showConfirmButton: false,
          timer: 2000
        });
      }, error => {
        console.error('Erreur lors de l\'annulation de la réservation', error);
        // Gérez l'erreur ici (affichage d'un message, traitement spécifique, etc.)
      });
  }
}
