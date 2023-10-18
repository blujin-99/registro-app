import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-logeo',
  standalone: true,
  imports: [CommonModule, MaterialModule, MatDialogModule],
  templateUrl: './dialog-logeo.component.html',
  styleUrls: ['./dialog-logeo.component.scss'],
})
export class DialogLogeoComponent {
  constructor(public dialogRef: MatDialogRef<DialogLogeoComponent>) {}

  /**
   * Redirecciona al oauth2
   */
  login() {
    const url = environment.authUrl + "/" + environment.auth.authorizeUrl+'?response_type=token&client_id='+environment.auth.clientId+'&redirect_uri='+environment.redirectUri;

    // https://tsso.santafe.gov.ar/service-auth/oauth2.0/authorize?response_type=token&client_id=mjydh-registropropiedad.sso.santafe.gov.ar.sdfg874&redirect_uri=https://twww.santafe.gob.ar/registropropiedad
    window.location.replace(url);
    /*window.location.replace(
      'https://dsso.santafe.gob.ar/service-auth/oauth2.0/authorize?response_type=token&client_id=sso.santafe.gov.ar.5868506FJCKWEDG33&redirect_uri=http://localhost:4200/login'
    );*/
  }

  /**
   * Limpia el localStorage
   * Y te redirecciona al inicio
   */
  logout() {
    localStorage.clear();

    window.location.replace('http://localhost:4200/inicio');
  }
}
