import {Component, OnInit} from '@angular/core';
import {Chambre} from "../../../core/Models/Chambre/chambre";
import {NgForm} from "@angular/forms";
import {Bloc} from "../../../core/Models/Bloc/bloc";
import {ChambreService} from "../../../core/service/Chambre/chambre.service";

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {
  listChambre: Chambre [] = [];

  constructor(private chambreS : ChambreService) {
  }

  ngOnInit() {
    this.refreshChambre()
  }

  refreshChambre(){
    this.chambreS.getAllChambre().subscribe((data)=>this.listChambre=data);
  }

  addChambre(formChambre: NgForm) {
    const chambre: Chambre = {
      idChambre: formChambre.value.idChambre,
      numeroChambre: formChambre.value.numeroChambre,
      typeC: formChambre.value.typeC,
    }

    console.log(formChambre.value)
    this.chambreS.ajouterChambre(chambre).subscribe(()=>this.refreshChambre())
    formChambre.resetForm();
  };
}
