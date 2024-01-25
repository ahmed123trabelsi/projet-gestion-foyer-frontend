import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EtudiantService} from "../../../core/service/Etudiant/etudiant.service";

@Component({
  selector: 'app-updateprofil',
  templateUrl: './updateprofil.component.html',
  styleUrls: ['./updateprofil.component.css']
})
export class UpdateprofilComponent {
  myForm!: FormGroup;
  id!: number;
  etudiant!: any;


  constructor(private actr: ActivatedRoute, private e: EtudiantService, private r: Router, private formBuild: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.formBuild.group({
      id: [0],
      nom: [''],
      prenom: [''],
      email: [''],
   password: [''],
      ecole:[''],
      dateNaissance: [''],
      role:['ETUDIANT']

    });
    this.id = this.actr.snapshot.params['id'];
    this.e.getUserById(this.id).subscribe((data) => {
      this.etudiant = data;

      this.myForm.setValue(this.etudiant);
    });
  }

  updateS() {

    this.e.updateEtudiant( this.myForm.value,this.id ).subscribe(()=>this.r.navigate(['/etudiant']))
  }
}
