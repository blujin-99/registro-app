import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.scss'],
})
export class InicioPageComponent implements OnInit {
  
  unauthorized:boolean = false

  
  constructor(private http: HttpClient, public storageSrv:StorageService) {

  }

  ngOnInit(): void {
    if(!this.storageSrv.unauthorized){
      this.unauthorized=true;
      this.storageSrv.unauthorized=false
    }
  }
  ngOnDestroy(): void {
    if(!this.storageSrv.unauthorized){
      this.storageSrv.unauthorized=false
    }
  }
  

}
