import { Component, Input } from '@angular/core';
import { MESA } from 'src/app/core/models/mesa-entrada.interface';
import { ConsultaMesaEntradaService } from '../../service/consulta-mesa-entrada.service';

declare var $: any;

@Component({
  selector: 'app-modal-mesa-entrada',
  templateUrl: './modal-mesa-entrada.component.html',
  styleUrls: ['./modal-mesa-entrada.component.scss'],
})

export class ModalMesaEntradaComponent {

	constructor(protected mesaEntradaServ: ConsultaMesaEntradaService) { }

	tramite: MESA | undefined

	mensaje: string = ""

	showModal: boolean = false

	ngOnInit(): void {
		// Primero, suscríbete al observable de errores para manejar los errores
		this.mesaEntradaServ.tramite$.subscribe(tramite => {
			this.tramite = tramite.data.data
			console.log(this.tramite)
		})
	}

	closeModal() {
		this.mesaEntradaServ.closeModal()
		this.tramite = undefined;
	}

}
