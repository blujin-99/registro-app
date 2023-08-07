import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-categoria.component.html',
  styleUrls: ['./alert-categoria.component.scss'],
})
export class AlertCategoriaComponent {
  snackBarRef = inject(MatSnackBarRef);
}
