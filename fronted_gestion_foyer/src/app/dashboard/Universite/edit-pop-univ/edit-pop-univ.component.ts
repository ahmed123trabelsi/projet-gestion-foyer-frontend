import {Component, EventEmitter, Input, Output} from "@angular/core";
@Component({
  selector: 'app-univ-edit-popup',
  template: `
    <div *ngIf="show" class="popup">
      <div class="popup-content bg-white text-dark p-4 border border-danger">
        <!-- Contenu du formulaire pour l'édition du foyer -->
        <h2 class="mb-4">Edit universite</h2>

        <div class="mb-3">
          <label for="nomUniversite" class="form-label">Id universite</label>
          <input type="text" id="nomUniversite" class="form-control border border-danger" [(ngModel)]="univDetails.idUniversite">
        </div>
        <div class="mb-3">
          <label for="nomFoyer" class="form-label">Nom universite</label>
          <input type="text" id="nomFoyer" class="form-control border border-danger" [(ngModel)]="univDetails.nomUniversite">
        </div>
        <div class="mb-3">
          <label for="adresse" class="form-label">Adresse universite</label>
          <input type="text" id="adresse" class="form-control border border-danger" [(ngModel)]="univDetails.adresse">
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
export class EditPopUnivComponent {
  @Input() show: boolean = false;
  @Input() univDetails: any = {};
  @Output() saveClicked: EventEmitter<any> = new EventEmitter<any>();

  saveChanges() {
    // Effectuez ici les opérations de sauvegarde ou de validation si nécessaire
    // Une fois les modifications enregistrées, émettez un événement vers le composant parent
    this.saveClicked.emit(this.univDetails); // Émet l'événement avec les détails du foyer
  }
}


