import { Component } from '@angular/core';
import {Reservation} from "../../../core/Models/Reservation/reservation";
import {ReservationService} from "../../../core/service/Reservation/reservation.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservations:Reservation[] = [];

  constructor(  private res: ReservationService) { }
  ngOnInit(): void {
    this.res.getAllReservation().subscribe(data => this. reservations=data);
  }
}
