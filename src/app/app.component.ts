import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AppService } from './shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(public appSrv: AppService){}

  ngOnInit(): void {
    initFlowbite();
  }
}
