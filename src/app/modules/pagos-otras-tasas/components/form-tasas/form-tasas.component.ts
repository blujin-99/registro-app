import { Component, OnInit, signal } from '@angular/core';
import { PagosTasasFormService } from '../../services/pagos-tasas.service';
import { IOficina,IOtrosPago,ITipoSolicitud } from '../../interfaces/pago-otras-tasas.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validFormClass } from 'src/app/shared/services/validFormClass';
import { PagoOtrasTasasService } from 'src/app/shared/services/pagoOtrasTasas.service';

@Component({
  selector: 'app-form-tasas',
  templateUrl: './form-tasas.component.html',
  styleUrls: ['./form-tasas.component.scss']
})
export class FormTasasComponent implements OnInit{

  oficina : IOficina[] | undefined = []
  concepto : IOtrosPago[] | undefined  = []
  tipoSolicitud : ITipoSolicitud[] | undefined  = []
  conceptoFilter = signal(this.concepto)
  disable = true

  formPagoTasas : FormGroup

  constructor(
    private pagosSrv : PagosTasasFormService,
    private fb : FormBuilder,
    public ValidatorSrv : validFormClass,
    private pagosTasas : PagoOtrasTasasService
     ){
     this.formPagoTasas = this.fb.group({
       oficina: ['',[Validators.required]],
       tipoSolicitud:['',[Validators.required]],
       concepto:  ['',[Validators.required]]
     })
  }


  ngOnInit(): void {
       this.pagosSrv.responseFiltros$.subscribe(response => {
        this.oficina = response?.nodo;
        this.tipoSolicitud = response?.tipoSolicitud;
        this.concepto = response?.otrosPagos
      })

      this.validForm()

  }

  validForm(){
    this.formPagoTasas.valueChanges.subscribe(value => {
        this.pagosSrv.setValidOTC(this.formPagoTasas.valid)
    })
  }

  getOficina(){
    const oficina = this.formPagoTasas.get('oficina')?.value
    const tSolicitud = this.formPagoTasas.get('tipoSolicitud')?.value
    if(oficina && tSolicitud){
      this.filtrarConcepto(oficina, tSolicitud)
    }
  }

  //siempre viene 0, si filtra por juridiccion 1 o 2 se le añade
  filtrarConcepto(oficina: IOficina, tSolicitud: ITipoSolicitud) {
    if (oficina.idJurisdiccion === 1 || oficina.idJurisdiccion === 2) {
      const data = this.concepto?.filter(concepto =>
       (concepto.jurisdiccion === 0 || concepto.jurisdiccion === oficina.idJurisdiccion)&&(concepto.TipoSolicitud.id === tSolicitud.id)
      );
      this.conceptoFilter.set(data)
    }else{
      let data = this.concepto?.filter(concepto =>
        (concepto.jurisdiccion !== 0) && (concepto.jurisdiccion === oficina.idJurisdiccion)
      )
      this.conceptoFilter.set(data)
    }
  }


  submit(){
    const oficina = this.formPagoTasas.get('oficina')?.value
    const tSolicitud = this.formPagoTasas.get('tipoSolicitud')?.value
    const concepto = this.formPagoTasas.get('concepto')?.value
    this.pagosTasas.setPagos(concepto,oficina,tSolicitud)
    this.validForm()
  }


}
