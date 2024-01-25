import {Component, OnInit} from '@angular/core';
import {UniversiteService} from "../../../core/service/Universite/universite.service";
import {Universite} from "../../../core/Models/Universite/universite";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit{
  listuniv : Universite [] = [];
  constructor(private univS : UniversiteService) {
  }

  ngOnInit() {
    this.univS.GetAllUniversite().subscribe((date)=>this.listuniv=date);
  }


}
