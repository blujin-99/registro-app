import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MESA } from 'src/app/core/models/mesa-entrada.interface';
import { CatchinErrorService } from 'src/app/core/interceptor/catchin-error.service';

@Component({
  selector: 'app-modal-mesa-entrada',
  templateUrl: './modal-mesa-entrada.component.html',
  styleUrls: ['./modal-mesa-entrada.component.scss']
})
export class ModalMesaEntradaComponent {
  constructor(private catchErrorServ: CatchinErrorService) {}

  private errorSubscription: Subscription | undefined;
  error$ : Observable<number | null> = this.catchErrorServ.error$
  mensaje : string = ""
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

  ngOnInit(): void {
    this.errorSubscription = this.catchErrorServ.error$.subscribe(error => {
      console.log(error)
      
      switch(error){
        case 404: this.mensaje = "No se encuentra el tramite"
          break;
          case 500: this.mensaje = "Error de conexión, intente nuevamente más tarde"
          break;
          default: this.mensaje = "esto"
      }
    })
  }


  ngOnDestroy(): void {
    if(this.errorSubscription){
       this.errorSubscription.unsubscribe()
    }
  }
}
