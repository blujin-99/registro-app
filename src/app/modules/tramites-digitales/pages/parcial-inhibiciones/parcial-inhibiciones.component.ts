import { Component } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { Jurisdiccion } from 'src/app/shared/interfaces/jurisdiccion.interface';
import { RpService } from 'src/app/shared/services/rp.service';

@Component({
  selector: 'app-parcial-inhibiciones',
  templateUrl: './parcial-inhibiciones.component.html',
  styleUrls: ['./parcial-inhibiciones.component.scss']
})
export class ParcialInhibicionesComponent {

  oficina?: Jurisdiccion|null;

  constructor(
    private route: ActivatedRoute,
    private rpService : RpService  ) {}

  ngOnInit(){
    let of = this.route.snapshot.paramMap.get('oficina');
    if (of){
      this.oficina = this.rpService.getJurisdiccion(of);
    }
  }
}
