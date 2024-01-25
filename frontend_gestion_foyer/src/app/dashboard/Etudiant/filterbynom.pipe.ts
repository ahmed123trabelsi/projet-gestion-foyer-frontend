import { Pipe, PipeTransform } from '@angular/core';
import {Etudiant} from "../../core/Models/Etudiant/etudiant";

@Pipe({
  name: 'filterbynom'
})
export class FilterbynomPipe implements PipeTransform {

  transform(etudiants: Etudiant[] = [], filterText: string): Etudiant[] {
    if (!filterText || filterText.trim() === '') {
      return etudiants;
    }

    return etudiants.filter((etudiant: Etudiant) => {
      return etudiant.nom.toString().includes(filterText);
    });
  }
}
