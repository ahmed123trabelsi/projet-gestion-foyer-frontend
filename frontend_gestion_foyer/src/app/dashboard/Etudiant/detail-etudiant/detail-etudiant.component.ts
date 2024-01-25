import {Component, Input, OnInit} from '@angular/core';
import {EtudiantService} from "../../../core/service/Etudiant/etudiant.service";
import {Etudiant} from "../../../core/Models/Etudiant/etudiant";

@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.css']
})
export class DetailEtudiantComponent implements  OnInit{
@Input() inputData :number | undefined;
etudiant!:Etudiant;

constructor(private etudiant_service:EtudiantService) {
}

  ngOnInit(): void {
  this.getEtudiantById();
  }
  getEtudiantById(){

  return this.etudiant_service.getUserById(this.inputData).subscribe({
    next:(data:object)=>{
      this.etudiant=data as Etudiant;
      console.log("aymen",this.etudiant)
    },
    error:(error)=>{
      console.log(error);
    }
  })
  }

}
