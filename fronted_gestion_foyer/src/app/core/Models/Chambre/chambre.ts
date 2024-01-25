import {TypeChambre} from "../type-chambre";
import {Bloc} from "../Bloc/bloc";
import {Reservation} from "../Reservation/reservation";

export class Chambre {
  idChambre !: number ;
  numeroChambre !: number ;
  typeC !: TypeChambre ;
  bloc ? : Bloc ;
  reservation?:Reservation[];
}
