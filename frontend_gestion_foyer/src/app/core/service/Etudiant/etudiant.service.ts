import { Injectable } from '@angular/core';
import {Etudiant} from "../../Models/Etudiant/etudiant";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import {Chambre} from "../../Models/Chambre/chambre";

@Injectable({
  providedIn: 'root'
}
)
export class EtudiantService {

  httpOption={
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  };
  private apiUrl :string = "http://localhost:8083/etudiant";
  constructor(private http : HttpClient) { }

  getStudents () {
    return this.http.get<Etudiant[]>(this.apiUrl + '/GETAllE' );
  }

 ajouterEtudiants(e:Etudiant){
    return this.http.post<Etudiant>(this.apiUrl + '/AddEE',e , this.httpOption);
 }

  getUserById(id:number | undefined){
    return this.http.get<Etudiant>(this.apiUrl + /GETE/+ id );
  }

  deleteById(id: number) {
    return this.http.delete<Etudiant>(this.apiUrl + "/DeleteE/" +id);
  }

  updateEtudiant(e : Etudiant , id:number){
    return this.http.put<Etudiant>(this.apiUrl + "/updateE/" + id , e , this.httpOption );
  }





}
