import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FoyerService} from "../../../core/service/Foyer/foyer.service";
import {BlocService} from "../../../core/service/bloc/bloc.service";

@Component({
  selector: 'app-updatebloc',
  templateUrl: './updatebloc.component.html',
  styleUrls: ['./updatebloc.component.css']
})
export class UpdateblocComponent {
  myForm!: FormGroup;
  id!: number;
  bloc!: any;


  constructor(private actr: ActivatedRoute, private b: BlocService, private r: Router, private formBuild: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.formBuild.group({
      idBloc: [0],
      nomBloc: [''],
      capaciteBloc: [''],
    });
    this.id = this.actr.snapshot.params['idBloc'];
    this.b.getBlocById(this.id).subscribe((data) => {
      this.bloc = data;
      const blocSchs = {
        idBloc: this.bloc.idBloc,
        nomBloc: this.bloc.nomBloc,
        capaciteBloc: this.bloc.capaciteBloc,
      };
      this.myForm.patchValue(blocSchs);
    });
  }

  updateB() {
    const updateValu ={
      idBloc:this.myForm.value.idBloc,
      nomBloc:this.myForm.value.nomBloc,
      capaciteBloc:this.myForm.value.capaciteBloc ,
      chambres :this.bloc.chambres
    };
    this.b.updateBloc( updateValu,this.id ).subscribe(()=>this.r.navigate(['/dashboard/ajouterBloc']))
  }

}
