import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-alert-develop',
  templateUrl: './alert-develop.component.html',
  styleUrls: ['./alert-develop.component.scss'],
})
export class AlertDevelopComponent implements OnInit {
  hide = false;

  env = environment;

  constructor(public appSrv: AppService) {}

  ngOnInit(): void {
    if (this.env.env === 'prod') {
      this.hide = true;
    }
  }

  close() {
    this.hide = true;
  }
}
