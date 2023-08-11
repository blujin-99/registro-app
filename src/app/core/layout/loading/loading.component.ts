import { Component } from '@angular/core';
import { LoadingService } from 'src/app/modules/consulta-estado-tramite-mesa-entrada/service/loading.service';

@Component({
  
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  isLoading$ = this.LoadingServ.isLoading$

  constructor(private LoadingServ:LoadingService){}
}
