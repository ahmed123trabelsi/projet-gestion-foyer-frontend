import {Etudiant} from "../Etudiant/etudiant";

export class Reservation {
  id !: number
  numResrvation!:string ;
  dateDebut !:Date;
  dateFin !: Date ;
  estValide !: boolean ;
  etudiant ?: Etudiant [] ;
}
