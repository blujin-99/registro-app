import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-error-servidor',
  imports: [CommonModule],
  templateUrl: './error-servidor.component.html',
  styleUrls: ['./error-servidor.component.scss'],
  standalone : true
})
export class ErrorServidorComponent implements OnInit{

  private _error = new BehaviorSubject(null)
  showError$ = this._error.asObservable()
  infoError : any
  show = false
  @Input() 
  set error(value: any) {
    this._error.next(value)
  }

  ngOnInit(): void {
   this.showError$.subscribe(data => this.infoError = data)
   this.show = true
  }
  close(){
    this.show = false
  }
  // errores : any[] = []
  // status : number = 0
  // mensaje : string[] = ['']
  // constructor(private router : Router, private errorServidorSrv : ErrorServidorService){}

  // ngOnInit(): void {
  //   this.errores[0] = false;
  
  //   this.errorServidorSrv.error$.subscribe(error => {
  //     this.errores = error
  //     for (let error of this.errores) {
  //       if (error.error !== 500 || error.error !== 404) {
  //         this.mensaje.push('Momentaneamente hay un error, intente nuevamente más tarde') 
  //       }
  //     }
  //   });

  // }

  // close(id:number){
  //   // this.errores = []
  //   // this.mensaje = []
  //   this.errorServidorSrv.setResponseError(id)
  //  }
   
}
