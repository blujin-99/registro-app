import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-opciones-tramite',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './opciones-tramite.component.html',
  styleUrls: ['./opciones-tramite.component.scss'],
})
export class OpcionesTramiteComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<OpcionesTramiteComponent>
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
