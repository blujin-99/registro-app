import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MESA } from 'src/app/core/models/mesa-entrada.interface';
import { CatchinErrorService } from 'src/app/core/services/catchin-error.service';
import { ConsultaMesaEntradaService } from '../../service/consulta-mesa-entrada.service';

declare var $: any;

@Component({
  selector: 'app-modal-mesa-entrada',
  templateUrl: './modal-mesa-entrada.component.html',
  styleUrls: ['./modal-mesa-entrada.component.scss'],
})
export class ModalMesaEntradaComponent {
  constructor(
    private catchErrorServ: CatchinErrorService,
    private mesaEntradaServ: ConsultaMesaEntradaService
  ) {}

  tramite: MESA | undefined;

  private errorSubscription: Subscription | undefined;
  error$: Observable<number | null> = this.catchErrorServ.error$;
  mensaje: string = '';

  ngOnInit(): void {
    // Primero, suscríbete al observable de errores para manejar los errores
    this.errorSubscription = this.catchErrorServ.error$.subscribe((error) => {
      this.tramite = undefined;
    });

    this.mesaEntradaServ.tramite$.subscribe((data) => {
      if (data) {
        this.tramite = data.data.data;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
    }
  }
}
