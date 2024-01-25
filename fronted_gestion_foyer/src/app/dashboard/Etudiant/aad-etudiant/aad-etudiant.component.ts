import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {EtudiantService} from "../../../core/service/Etudiant/etudiant.service";
import {Etudiant} from "../../../core/Models/Etudiant/etudiant";
import {Router} from "@angular/router";
import {Role} from "../../../core/Models/Role/role";
import {AuthenService} from "../../../core/service/Authentification/authen.service";


@Component({
  selector: 'app-aad-etudiant',
  templateUrl: './aad-etudiant.component.html',
  styleUrls: ['./aad-etudiant.component.css']
})
export class AadEtudiantComponent implements OnInit{
    listEtu!:Etudiant ;
    l!:number ;

    constructor(private studentS : EtudiantService , private authentication : AuthenService, private route:Router) {}

    ngOnInit() {
      this.studentS.getStudents().subscribe(data => this.l=data.length+1)

    }
  adduser(f : NgForm) {
        const etudiant: Etudiant = {
          "id": this.l,
          "nom": f.value.nom,
          "prenom": f.value.prenom,
          "cin": f.value.cin,
          "dateNaissance": f.value.dateNaissance,
          "ecole": f.value.ecole,
          "email": f.value.email,
          "password": f.value.password,
          "role": f.value.Role
        }

        this.authentication.ajouterEtudiant(etudiant).subscribe(() => {
          console.log(f);
          alert('added User!!');
          //redirection vers list users
          this.route.navigate(['dashboard/Listetudiant']);
        })
      }

}
