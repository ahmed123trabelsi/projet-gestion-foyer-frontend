import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-foyer-edit-popup',
  template: `
    <div *ngIf="show" class="popup">
      <div class="popup-content bg-white text-dark p-4 border border-danger">
        <!-- Contenu du formulaire pour l'édition du foyer -->
        <h2 class="mb-4">Edit Foyer</h2>

        <div class="mb-3">
          <label for="idFoyer" class="form-label">ID du Foyer</label>
          <input type="text" id="idFoyer" class="form-control border border-danger" [(ngModel)]="foyerDetails.idFoyer">
        </div>
        <div class="mb-3">
          <label for="nomFoyer" class="form-label">Nom du Foyer</label>
          <input type="text" id="nomFoyer" class="form-control border border-danger" [(ngModel)]="foyerDetails.nomFoyer">
        </div>
        <div class="mb-3">
          <label for="capaciteFoyer" class="form-label">Capacité du Foyer</label>
          <input type="number" id="capaciteFoyer" class="form-control border border-danger" [(ngModel)]="foyerDetails.capaciteFoyer">
        </div>
        <button (click)="saveChanges()" class="btn btn-danger">Enregistrer les modifications</button>
      </div>
    </div>



  `,
  styles: [`
    /* Styles pour le pop-up */
    .popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      border: 1px solid #ccc;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
    .popup-content {
      /* Styles pour le contenu du pop-up */
    }
    .form-group {
      margin-bottom: 15px;
    }
    /* ... Autres styles pour les champs de formulaire ... */
  `]
})
export class EditPopComponent {
  @Input() show: boolean = false;
  @Input() foyerDetails: any = {};
  @Output() saveClicked: EventEmitter<any> = new EventEmitter<any>();

  saveChanges() {
    // Effectuez ici les opérations de sauvegarde ou de validation si nécessaire
    // Une fois les modifications enregistrées, émettez un événement vers le composant parent
    this.saveClicked.emit(this.foyerDetails); // Émet l'événement avec les détails du foyer
  }
}


