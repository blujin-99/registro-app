import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.scss'],
})
export class InicioPageComponent {
  constructor(private http: HttpClient) {}

  usuario() {
    this.http
      .get('https://twww.santafe.gob.ar/registropropiedad/api/usuario')
      .subscribe((data) => console.log(data));

    this.http
      .get(
        'https://twww.santafe.gob.ar/registropropiedad/api/usuario'
      )
      .subscribe((data2) => console.log(data2));
  }
}
