import { Component } from '@angular/core';
import { RpService } from 'src/app/shared/services/rp.service';
import { Jurisdiccion } from 'src/app/shared/interfaces/jurisdiccion.interface';


@Component({
  selector: 'app-oficina-presentacion',
  templateUrl: './oficina-presentacion.component.html',
  styleUrls: ['./oficina-presentacion.component.scss']
})
export class OficinaPresentacionComponent {
  jurisdicciones : Jurisdiccion[]
  constructor(public rp : RpService){
    this.jurisdicciones = rp.jurisdicciones();
  }

}
