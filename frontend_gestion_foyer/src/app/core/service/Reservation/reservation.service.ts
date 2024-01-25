import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Foyer} from "../../Models/Foyer/foyer";
import {Reservation} from "../../Models/Reservation/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http : HttpClient) { }

  httpOption={
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    })
  };

  private apiUrl :string = "http://localhost:8083/Reservation";

  getAllReservation(){
    return this.http.get<Reservation[]>(this.apiUrl + '/GetAllReservation');
  }

  getReservationById(id: number) {
    return this.http.get<Reservation>(this.apiUrl + "/GetReservationById" + id );
  }
  ajouterReservation( id : number , cin : number){
    return this.http.post<Reservation>(this.apiUrl + "/ajouterReservation/" +id +"/" + cin  , this.httpOption) ;
  }

  annulerReservation(cin: number){
    return this.http.delete<Reservation>(this.apiUrl +"/annulerReservation/" + cin );
  }

  updateReservation(r : Reservation , id:number){
    return this.http.put<Reservation>(this.apiUrl + "/updateReservation/" + id , r , this.httpOption  );
  }

}
