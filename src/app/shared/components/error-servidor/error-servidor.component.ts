import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorServidorService } from './error-servidor.service';

@Component({
  selector: 'app-error-servidor',
  imports: [CommonModule],
  templateUrl: './error-servidor.component.html',
  styleUrls: ['./error-servidor.component.scss'],
  standalone : true
})
export class ErrorServidorComponent implements OnInit{
  
  error = false
  status : number = 0
  mensaje = ''
  constructor(private router : Router, private errorServidorSrv : ErrorServidorService){}

  ngOnInit(): void {
    this.error = false;
  
    this.errorServidorSrv.error$.subscribe(error => {
      this.mensaje = error.message;
      this.status = error.error
      if (error.error === 500 || error.error === 404) {
        this.error = true
      }
    });

  }

  close(){
    this.error = false
    this.mensaje = ''
    this.errorServidorSrv.setResponseError(null)
   }
   
}
