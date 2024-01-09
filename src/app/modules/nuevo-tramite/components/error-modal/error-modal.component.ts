import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NewTramiteService } from '../../services/new-tramite.service';
import { ICategoriaTramite } from 'src/app/core/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent {
  
  error = false
  
  constructor(private router : Router, public newTramiteSrv : NewTramiteService){}
   
   ngOnInit(): void {
   
    this.newTramiteSrv.getSRD().subscribe( (
      response: ICategoriaTramite[]) => {
      if(response){
        this.error = false
      }
    },
    (errorResponse: { error: any, isSuccess: boolean }) => {
      this.error = true
      console.error(errorResponse.error);
    })

   }
  
   goToInicio(){
    this.router.navigateByUrl("/inicio")
   }
}
