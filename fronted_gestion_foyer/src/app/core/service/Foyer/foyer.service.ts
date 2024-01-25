import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Bloc} from "../../Models/Bloc/bloc";
import {Foyer} from "../../Models/Foyer/foyer";
import {Etudiant} from "../../Models/Etudiant/etudiant";

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl :string = "http://localhost:8083/foyer";

  httpOption={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }

  getAllFoyers(){
    return this.http.get<Foyer[]>(this.apiUrl + '/GetallFoyer');
  }

  getFoyerById(id: number) {
    return this.http.get(this.apiUrl + "/getFoyer/" + id  );
  }
  ajouterFoyer(foyer : Foyer){
    return this.http.post<Foyer>(this.apiUrl + "/addFoyer" ,foyer) ;
  }

  findUSF(){
    return this.http.get<String>(this.apiUrl+ "/FindUSF") ;
  }

  deleteFoyer(id: number){
    return this.http.delete<any>(this.apiUrl +"/Delete/" + id , this.httpOption);
  }

  updateFoyer(f : Foyer , id:number){
    return this.http.put<Foyer>(this.apiUrl + "/update/" + id , f , this.httpOption  );
  }

}
