import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Bloc} from "../../../core/Models/Bloc/bloc";
import {Router} from "@angular/router";
import {BlocService} from "../../../core/service/bloc/bloc.service";
import {ChambreService} from "../../../core/service/Chambre/chambre.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-ajouter-bloc',
  templateUrl: './ajouter-bloc.component.html',
  styleUrls: ['./ajouter-bloc.component.css']
})
export class AjouterBlocComponent implements OnInit {
  listBloc: Bloc[] = [];
  l!: number;
  numChambersInput: string = ''; // Champ de saisie pour les numéros de chambre
  idBlocInput: number = 0; // Champ de saisie pour le nom du bloc
  bloc!: Bloc
  blocs: Bloc[] = [];

  constructor(private chambreS: ChambreService, private blocS: BlocService, private r: Router) {
  }

  ngOnInit() {
    this.refreshBlocList();

  }

  addBloc(formBloc: NgForm) {
    console.log('Form values:', formBloc.value);

    const nouveauBloc: Bloc = {
      idBloc: formBloc.value.idBloc,
      nomBloc: formBloc.value.nomBloc,
      capaciteBloc: formBloc.value.capaciteBloc,
    };
    console.log('Nouveau bloc:', nouveauBloc);

    this.blocS.ajouterBloc(nouveauBloc).subscribe(() => {
      console.log('Bloc ajouté avec succès');
      this.refreshBlocList();
      formBloc.resetForm();
    });
  }

  private refreshBlocList() {
    this.blocS.getAllBlocs().subscribe((data) => (this.listBloc = data));
  }

  affecterChambres(): void {
    // Convertir la chaîne de numéros de chambre en un tableau
    const numChambersArray: number[] = this.numChambersInput.split(',').map(num => +num.trim());

    // Appeler la méthode du service avec les valeurs des champs d'entrée
    this.blocS.affecterChambresABloc(numChambersArray, this.idBlocInput)
      .subscribe(
        () => {
          alert('Chambres affectées au bloc avec succès');
          this.refreshBlocList()
          // r.navigate(['/bloc']);
        },
        (error) => {
          console.error('Erreur lors de l\'affectation des chambres au bloc', error);
        }
      );
  }

  // delete(id:number){
  //   this.blocS.deleteBloc(id).subscribe(()=>this.ngOnInit());
  // }
  delete(id: number) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.blocS.deleteBloc(id).subscribe(() => {
        this.ngOnInit()
      });
    }
  }

}
