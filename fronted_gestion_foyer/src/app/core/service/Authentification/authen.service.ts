import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Etudiant} from "../../Models/Etudiant/etudiant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private http : HttpClient) { }

  private baseUrl = 'http://localhost:8083/auth'; // Assurez-vous de mettre le bon URL du backend ici

  ajouterEtudiant(etudiant: Etudiant) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });



    const url = this.baseUrl + '/registerEtudiant';

    return this.http.post<Etudiant>(url, etudiant, { headers });
  }

  checkEmailExists(email: string) {
    // Ajoutez l'e-mail à la requête comme paramètre
    const params = new HttpParams().set('email', email);

    // Utilisez la requête HTTP GET avec les paramètres
    return this.http.get(this.baseUrl + '/checkEmailExists', { params });
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }


  }

