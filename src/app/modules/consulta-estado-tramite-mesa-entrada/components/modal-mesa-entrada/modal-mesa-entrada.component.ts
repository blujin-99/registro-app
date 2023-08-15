import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MESA } from 'src/app/core/models/mesa-entrada.interface';
import { CatchinErrorService } from 'src/app/core/services/catchin-error.service';
import { ConsultaMesaEntradaService } from '../../service/consulta-mesa-entrada.service';

@Component({
	selector: 'app-modal-mesa-entrada',
	templateUrl: './modal-mesa-entrada.component.html',
	styleUrls: ['./modal-mesa-entrada.component.scss']
})


export class ModalMesaEntradaComponent {

	constructor(
		private catchErrorServ: CatchinErrorService,
		private mesaEntradaServ: ConsultaMesaEntradaService) { }

    tramite : any
	
	private errorSubscription: Subscription | undefined;
	error$: Observable<number | null> = this.catchErrorServ.error$
	mensaje: string = ""

	ngOnInit(): void {
		// Primero, suscríbete al observable de errores para manejar los errores
		this.errorSubscription = this.catchErrorServ.error$.subscribe(error => {
		  console.log(error);
		  switch (error) {
			case 404:
			  this.mensaje = "No se encuentra el trámite";
			  break;
			case 500:
			  this.mensaje = "No se encuentra el trámite";
			  break;
		  }
		});

		this.mesaEntradaServ.tramite$.subscribe(data => {
			this.tramite = data.data.data
            console.log(this.tramite)			
		   }
		)
	  }
	  


	ngOnDestroy(): void {
		if (this.errorSubscription) {
			this.errorSubscription.unsubscribe()
		}
	}
}
