import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BlocService} from "../../../core/service/bloc/bloc.service";
import {ChambreService} from "../../../core/service/Chambre/chambre.service";

@Component({
  selector: 'app-updatechambre',
  templateUrl: './updatechambre.component.html',
  styleUrls: ['./updatechambre.component.css']
})
export class UpdatechambreComponent {
  myForm!: FormGroup;
  id!: number;
  chambre!: any;


  constructor(private actr: ActivatedRoute, private c: ChambreService, private r: Router, private formBuild: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.formBuild.group({
      idChambre: [0],
      numeroChambre: [''],
      typeC: [''],
    });
    this.id = this.actr.snapshot.params['idChambre'];
    this.c.getchambrebyId(this.id).subscribe((data) => {
      this.chambre = data;
      const chambresSress = {
        idChambre: this.chambre.idChambre,
        numeroChambre: this.chambre. numeroChambre,
        typeC: this.chambre. typeC,
      };
      this.myForm.patchValue(chambresSress);
    });
  }

  updateC() {
    const updateValu ={
      idChambre:this.myForm.value.idChambre,
      numeroChambre:this.myForm.value. numeroChambre,
      typeC:this.myForm.value.typeC,
      reservation :this.chambre.reservation
    };
    this.c.updateChambre( updateValu,this.id ).subscribe(()=>this.r.navigate(['/dashboard/ajouterChambre']))
  }

}
