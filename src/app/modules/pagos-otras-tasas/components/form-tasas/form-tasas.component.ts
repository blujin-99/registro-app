import { Component, OnInit } from '@angular/core';
import { PagosTasasService } from '../../services/pagos-tasas.service';
import { switchMap } from 'rxjs';
import { IOficiona,IOtrosPago,ITipoSolicitud } from '../../interfaces/pago-otras-tasas.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-tasas',
  templateUrl: './form-tasas.component.html',
  styleUrls: ['./form-tasas.component.scss']
})
export class FormTasasComponent implements OnInit{

  oficina : IOficiona[] | undefined = []
  concepto : IOtrosPago[] | undefined  = []
  tipoSolicitud : ITipoSolicitud[] | undefined  = []
  
  
  formPagoTasas : FormGroup 

  constructor(private pagosSrv : PagosTasasService, private fb : FormBuilder){
     this.formPagoTasas = this.fb.group({
       oficina: [''],
       tipoSolicitud:[''],
       concepto: ['']
     })
  }

  ngOnInit(): void {
       this.pagosSrv.response$.subscribe(response => {
        this.oficina = response?.nodo;
        this.tipoSolicitud = response?.tipoSolicitud;
        this.concepto = response?.otrosPagos
      })
   
  }

  getOficina(){
    const oficina = this.formPagoTasas.get('oficina')?.value
    const tipoSolicitud = this.formPagoTasas.get('tipoSolicitud')?.value


      if(oficina.idJurisdiccion == 1 || oficina.idJurisdiccion == 2){
        this.concepto = this.concepto?.filter(concepto => (concepto.jurisdiccion === 0)&&
        (concepto.TipoSolicitud.id === tipoSolicitud.id))
        console.log(tipoSolicitud.id)
      }


  }
}