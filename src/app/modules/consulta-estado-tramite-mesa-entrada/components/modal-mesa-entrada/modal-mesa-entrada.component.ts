import { Component } from '@angular/core';
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
		private mesaEntradaService: ConsultaMesaEntradaService) { }


	private errorSubscription: Subscription | undefined;
	error$: Observable<number | null> = this.catchErrorServ.error$
	mensaje: string = ""
    tramite : {}={}

	ngOnInit(): void {
		// Primero, suscríbete al observable de errores para manejar los errores
		this.errorSubscription = this.catchErrorServ.error$.subscribe(error => {
		  console.log(error);
		  switch (error) {
			case 404:
			  this.mensaje = "No se encuentra el trámite";
			  break;
			case 500:
			  this.mensaje = "Error de conexión, intente nuevamente más tarde";
			  break;
		  }
		});
	  
		// Luego, realiza la solicitud HTTP y suscríbete al resultado
		// this.mesaEntradaService.getConsultaHttp();
	  
		// // Ahora puedes suscribirte al observable de resultados
		// this.mesaEntradaService.getResultado().subscribe(data => {
		//   console.log(data);
		//   // Aquí puedes manejar los datos recibidos
		// });
	  }
	  


	ngOnDestroy(): void {
		if (this.errorSubscription) {
			this.errorSubscription.unsubscribe()
		}
	}
}
