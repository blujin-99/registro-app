import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatchinErrorService } from '../../services/catchin-error.service';

@Component({
  selector: 'app-catching-error',
  templateUrl: './catching-error.component.html',
  styleUrls: ['./catching-error.component.scss']
})
export class CatchingErrorComponent {

  error$ = this.catchErrorServ.error$;
  private errorSubscription: Subscription | undefined;

  mensaje: string | null = null; 

  constructor(private catchErrorServ: CatchinErrorService) {

  }

  closeAlert() {
    this.catchErrorServ.clearError()
  }

  ngOnInit(): void {
    this.errorSubscription = this.catchErrorServ.error$.subscribe(error => {
      if (error ===404) {
        this.mensaje = "No encontrado"
      }
      if (error === 500) {
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
