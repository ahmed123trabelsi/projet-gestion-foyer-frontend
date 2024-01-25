import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Universite} from "../../../core/Models/Universite/universite";
import {ActivatedRoute, Router} from "@angular/router";
import {UniversiteService} from "../../../core/service/Universite/universite.service";
import {Foyer} from "../../../core/Models/Foyer/foyer";
import {FoyerService} from "../../../core/service/Foyer/foyer.service";

@Component({
  selector: 'app-updatefoyer',
  templateUrl: './updatefoyer.component.html',
  styleUrls: ['./updatefoyer.component.css']
})
export class UpdatefoyerComponent {
  myForm!: FormGroup;
  id!: number;
  foyer!: any;


  constructor(private actr: ActivatedRoute, private f: FoyerService, private r: Router, private formBuild: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.formBuild.group({
      idFoyer: [0],
      nomFoyer: [''],
      capaciteFoyer: [''],
    });
    this.id = this.actr.snapshot.params['idFoyer'];
    this.f.getFoyerById(this.id).subscribe((data) => {
      this.foyer = data;
      const foyerSU = {
        idFoyer: this.foyer.idFoyer,
        nomFoyer: this.foyer.nomFoyer,
        capaciteFoyer: this.foyer.capaciteFoyer,
      };
      this.myForm.patchValue(foyerSU);
    });
  }

  updateF() {
    const updateValu ={
      idFoyer:this.myForm.value.idFoyer,
      nomFoyer:this.myForm.value.nomFoyer,
      capaciteFoyer:this.myForm.value.capaciteFoyer ,
      universite :this.foyer.universite
    };
    this.f.updateFoyer( updateValu,this.id ).subscribe(()=>this.r.navigate(['/dashboard/ajouteFoyer']))
  }
}
