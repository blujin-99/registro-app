import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MESA } from 'src/app/core/models/mesa-entrada.interface';
import { ConsultaMesaEntradaService } from 'src/app/shared/services/consulta-mesa-entrada.service';

@Component({
  selector: 'app-modal-mesa-entrada',
  templateUrl: './modal-mesa-entrada.component.html',
  styleUrls: ['./modal-mesa-entrada.component.scss']
})
export class ModalMesaEntradaComponent {
  constructor(private mesaEntradaService: ConsultaMesaEntradaService) {}

  private errorSubscription: Subscription | undefined;
  error$ : Observable<string | null> = this.mesaEntradaService.error$


  ngOnInit(): void {
    
  }

  tramite: MESA ={
    presentado: 'Santa Fe',
    numero: '0197255',
    fecha: new Date(2023,7,8),
    tipoDoc: ' Oficio',
    tipoEntrada:'Normal',
    salida: true,
    fechaSalida:  new Date(2023,7,12),
    tipoSalida: 'Mesa de Entrada',
    casillero:''
  }

  ngOnDestroy(): void {
    if(this.errorSubscription){
       this.errorSubscription.unsubscribe()
    }
  }
}
