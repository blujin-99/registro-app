import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
}
