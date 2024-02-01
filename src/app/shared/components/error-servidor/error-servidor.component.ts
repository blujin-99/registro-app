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
  constructor(private router : Router, private errorSrvidorSrv : ErrorServidorService){}

  ngOnInit(): void {
    this.error = false
     this.errorSrvidorSrv.error$.subscribe(error => {
      
     })
    
  }

  goToInicio(){
    this.error = false
    this.router.navigateByUrl("/inicio")
   }
}
