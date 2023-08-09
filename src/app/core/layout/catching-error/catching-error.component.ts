import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsultaMesaEntradaService } from 'src/app/shared/services/consulta-mesa-entrada.service';

@Component({
  selector: 'app-catching-error',
  templateUrl: './catching-error.component.html',
  styleUrls: ['./catching-error.component.scss']
})
export class CatchingErrorComponent {

  error$ = this.mesaEntradaService.error$;
  private errorSubscription: Subscription | undefined;

  mensaje: string | null = null; 

  constructor(private mesaEntradaService: ConsultaMesaEntradaService) {

  }

  closeAlert() {
    this.mesaEntradaService.clearErro()
  }

  ngOnInit(): void {
    this.errorSubscription = this.mesaEntradaService.error$.subscribe(error => {
      if (error =='404') {
        this.mensaje = "No se ha encontrado el Tramite "
      }
      if (error == '500') {
        this.mensaje = "Error de conexión, intente nuevamente más tarde"
      }
    })

  }

  ngOnDestroy(): void {
    if(this.errorSubscription){
       this.errorSubscription.unsubscribe()
    }
    this.closeAlert()
  }

}
