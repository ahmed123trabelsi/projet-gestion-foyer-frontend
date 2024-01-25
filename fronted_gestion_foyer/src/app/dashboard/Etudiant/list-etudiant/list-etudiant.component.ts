import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EtudiantService} from "../../../core/service/Etudiant/etudiant.service";
import {Etudiant} from "../../../core/Models/Etudiant/etudiant";
import Swal from "sweetalert2";


@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements  OnInit {
  listEtud: Etudiant [] = [];
  filteredList: Etudiant[] = [];
  searchTerm: string = '';
  showMe: boolean = false;
  id_Etudiant!: number;
  filterValue : string = '';

  sendId(id: number) {
    this.id_Etudiant = id;
    console.log(this.id_Etudiant);
    this.showMe = !this.showMe;
  }

  constructor(private route: Router, private etudiantS: EtudiantService) {
  }

  ngOnInit() {
    this.etudiantS.getStudents().subscribe(aymen => {
      this.listEtud = aymen;
      this.filteredList = this.listEtud;
    });
  }

  onSearch() {
    let searchTerm: string;
    if (this.searchTerm.trim() === '') {
      // Si l'input est vide, afficher tous les étudiants
      this.filteredList = this.listEtud.slice();
    } else {
      // Filtrer les étudiants dont le nom contient la chaîne de recherche (insensible à la casse)
      this.filteredList = this.listEtud.filter(etudiant =>
        etudiant.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        etudiant.id.toString().includes(searchTerm)
      );
    }
  }


//   delete(id: number ) {
//     console.log(id);
//     if (window.confirm('Do you want to go ahead?')) {
//       this.etudiantS.deleteById(id).subscribe(() => {
//         this.ngOnInit()
//       });
//     }
//   }
// }
  delete(id: number) {
    console.log(id);

    Swal.fire({
      title: 'Êtes-vous sûr(e) ?',
      text: 'Voulez-vous continuer ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.etudiantS.deleteById(id).subscribe(() => {
          this.ngOnInit();
          Swal.fire({
            title: 'Supprimé !',
            text: 'Votre fichier a été supprimé.',
            icon: 'success'
          });
        });
      }
    });
  };


  // openPopup(etudiant: any) {
  //   this.etudToEdit = etudiant;
  //   this.showPopup = true;
  // }
  //
  // onSaveChanges(etudToEdit: any) {
  //   // Traitez ici les modifications sauvegardées depuis le composant de pop-up
  //   console.log('Modifications sauvegardées : ', etudToEdit);
  //
  //   // Fermez le pop-up ou effectuez d'autres actions si nécessaire
  //   this.showPopup = false;
  // }
  // showPopup: boolean = false;
  // etudToEdit: any = {};


}
