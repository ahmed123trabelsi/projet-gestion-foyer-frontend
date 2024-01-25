import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Bloc} from "../../Models/Bloc/bloc";
import {Foyer} from "../../Models/Foyer/foyer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  httpOption={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private baseUrl = 'http://localhost:8083/bloc';
  constructor(private http : HttpClient) { }

  ajouterBloc(bloc : Bloc ){
    return this.http.post<Bloc>(this.baseUrl +"/AddBloc",bloc, this.httpOption  ) ;
  }

  getAllBlocs(){
    return this.http.get<Bloc[]>(this.baseUrl + '/GetAllBlocs');
  }

  affecterBlocAFoyer(idBloc : number , idFoyer : number){
    return this.http.put<Bloc>(this.baseUrl +'/affecterBlocAFoyer/' + idBloc + '/' +idFoyer ,this.httpOption  ) ;
  }

  findBlocnonaffect(){
    return  this.http.get<Bloc>(this.baseUrl +"/findFbyBloc");
  }
  getBlocById(id: number) {
    return this.http.get(this.baseUrl + "/getBlocById/" + id  );
  }
  updateBloc(B : Bloc , id:number){
    return this.http.put<Bloc>(this.baseUrl + "/updateBloc/" + id , B , this.httpOption  );
  }

  // affecterChambresABloc(numChambers: number[], id: number) {
  //   const url = this.baseUrl + "/affecterChambreABloc/" + id ;
  //   return this.http.put<any>(url, numChambers);
  // }
  affecterChambresABloc(numChambres: number[], idBloc: number): Observable<any> {
    const url = `${this.baseUrl}/affecterChambreABloc/${idBloc}`;
    return this.http.post(url, numChambres);
  }

  deleteBloc (id : number){
    return this.http.delete(this.baseUrl + "/RemoveBloc/" + id );
  }


}
