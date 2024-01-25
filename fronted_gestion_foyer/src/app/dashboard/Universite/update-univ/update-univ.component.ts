import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UniversiteService} from "../../../core/service/Universite/universite.service";
import {Universite} from "../../../core/Models/Universite/universite";

@Component({
  selector: 'app-update-univ',
  templateUrl: './update-univ.component.html',
  styleUrls: ['./update-univ.component.css']
})
export class UpdateUnivComponent {
  myForm!: FormGroup;
  id!: number;
  universite !: Universite;


  constructor(private actr: ActivatedRoute, private u: UniversiteService, private r: Router, private formBuild: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.formBuild.group({
      idUniversite: [0],
      nomUniversite: [''],
      adresse: [''],
    });
    this.id = this.actr.snapshot.params['idUniversite'];
    this.u.getUnivById(this.id).subscribe((data) => {
      this.universite = data;
      const universiteSF = {
        idUniversite: this.universite.idUniversite,
        nomUniversite: this.universite.nomUniversite,
        adresse: this.universite.adresse,
      };
      this.myForm.patchValue(universiteSF);
    });
  }

  updateU() {
    const updateValu ={
      idUniversite:this.myForm.value.idUniversite,
      nomUniversite:this.myForm.value.nomUniversite,
      adresse:this.myForm.value.adresse ,
      foyer :this.universite.foyer
  };
    this.u.updateUniv(this.id , updateValu).subscribe(()=>this.r.navigate(['/dashboard/ajouteUniversite']))
  }
}
