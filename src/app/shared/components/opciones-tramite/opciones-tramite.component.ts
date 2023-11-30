import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TramitesService } from 'src/app/modules/tramites/services/tramites.service';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-opciones-tramite',
  templateUrl: './opciones-tramite.component.html',
  styleUrls: ['./opciones-tramite.component.scss'],
})
export class OpcionesTramiteComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<OpcionesTramiteComponent>,
    public tramiteSrv: TramitesService,
    private userSrv: UserService
  ) {}

  redirectToAction(link: string) {
    const urlForm = environment.formURL;
    const url = urlForm + this.userSrv.getToken() + '?redirect=' + link;

    window.open(url);
  }

  openLink(event: MouseEvent, link: string): void {
    this.redirectToAction(link);
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
