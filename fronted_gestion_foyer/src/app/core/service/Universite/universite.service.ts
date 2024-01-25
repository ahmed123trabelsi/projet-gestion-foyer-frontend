import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Universite} from "../../Models/Universite/universite";
import {Foyer} from "../../Models/Foyer/foyer";
import {FoyerService} from "../Foyer/foyer.service";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  httpOption={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
})
  }

  constructor(private http : HttpClient  ) { }

  private baseUrl = 'http://localhost:8083/universite';

  GetAllUniversite(){
    return this.http.get<Universite[]>(this.baseUrl +"/getAllUniversite");
  }

  ajouterUniversite(u : Universite){
    return this.http.post<Universite>(this.baseUrl + "/AddUniversite" , u) ;
  }
  affecterFoyerAUniversite( idFoyer:number, nomUniversite:String ){
    return this.http.put<Foyer>(this.baseUrl + "/affecterUniversiteAFoyer/"+idFoyer+'/'+nomUniversite ,this.httpOption);
  }

  getUnivById(id: number){
    return this.http.get<Universite>(this.baseUrl + "/GetUniversiteById/" +id)
  }

  updateUniv(id : number ,u : Universite){
  return this.http.put<Universite>(this.baseUrl + '/updateU/'+id , u, this.httpOption);
  }

  deleteUniv(id:number){
    return this.http.delete<Universite>(this.baseUrl + '/deleteUniv/' +id , this.httpOption) ;

  }

}

