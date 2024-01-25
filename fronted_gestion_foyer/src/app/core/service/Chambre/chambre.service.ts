import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Chambre} from "../../Models/Chambre/chambre";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private baseUrl ='http://localhost:8083/chambre' ;
  httpOption={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }

  ajouterChambre(chambre :  Chambre ){
    return this.http.post<Chambre>(this.baseUrl + "/addChambre" , chambre , this.httpOption);
  }

  getAllChambre(){
    return this.http.get<Chambre[]>(this.baseUrl + "/GetAllChambre")
  }
  updateChambre(c:Chambre,id:number)
  {
    return this.http.put<Chambre>(this.baseUrl+ "/Update/" +id ,c ,this.httpOption)
  }

  getchambrebyId(id: number){
    return this.http.get<Chambre>(this.baseUrl + "/getChambre/" + id) ;
  }


}
