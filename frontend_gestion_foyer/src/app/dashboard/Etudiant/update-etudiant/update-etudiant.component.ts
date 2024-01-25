import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../../../core/Models/Etudiant/etudiant";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EtudiantService} from "../../../core/service/Etudiant/etudiant.service";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";
import {ChambreService} from "../../../core/service/Chambre/chambre.service";

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  myForm!: FormGroup;
  id!: number;
  etudiant!: any;


  constructor(private actr: ActivatedRoute, private e: EtudiantService, private r: Router, private formBuild: FormBuilder) {
  }

  ngOnInit() {
//     this.myForm = this.formBuild.group({
//       id: [0],
//       nom: [''],
//       prenom: [''],
//       email: [''],
// password:['']
//     });
//     this.id = this.actr.snapshot.params['id'];
//     this.e.getUserById(this.id).subscribe((data) => {
//       this.etudiant = data;
//
//       this.myForm.setValue(this.etudiant);
//     });
//   }

    // updateS() {
    //
    //   this.e.updateEtudiant( this.myForm.value,this.id ).subscribe(()=>this.r.navigate(['/dashboard/ajouterChambre']))
    // }
    //


  }
}
