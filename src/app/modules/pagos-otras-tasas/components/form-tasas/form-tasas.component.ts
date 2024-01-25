import { Component, OnInit, signal } from '@angular/core';
import { PagosTasasService } from '../../services/pagos-tasas.service';
import { switchMap } from 'rxjs';
import { IOficiona,IOtrosPago,ITipoSolicitud } from '../../interfaces/pago-otras-tasas.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validFormClass } from 'src/app/shared/services/validFormClass';

@Component({
  selector: 'app-form-tasas',
  templateUrl: './form-tasas.component.html',
  styleUrls: ['./form-tasas.component.scss']
})
export class FormTasasComponent implements OnInit{

  oficina : IOficiona[] | undefined = []
  concepto : IOtrosPago[] | undefined  = []
  tipoSolicitud : ITipoSolicitud[] | undefined  = []
  conceptoFilter = signal(this.concepto)
  disable = true
  
  formPagoTasas : FormGroup 

  constructor(
    private pagosSrv : PagosTasasService,
    private fb : FormBuilder,
    public ValidatorSrv : validFormClass
     ){
     this.formPagoTasas = this.fb.group({
       oficina: ['',[Validators.required]],
       tipoSolicitud:['',[Validators.required]],
       concepto:  [{ value: '', disabled: true },[Validators.required]]
     })
  }

  ngOnInit(): void {
       this.pagosSrv.response$.subscribe(response => {
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
      this.formPagoTasas.get('concepto')?.enable()
    }
  }
  //siempre viene 0, si filtra por juridiccion 1 o 2 se le añade
  filtrarConcepto(oficina: IOficiona, tSolicitud: ITipoSolicitud) {
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
    this.pagosSrv.setPagos(concepto,oficina,tSolicitud)
    this.validForm()
  }
   
  
}