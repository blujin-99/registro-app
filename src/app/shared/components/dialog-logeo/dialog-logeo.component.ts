import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dialog-logeo',
  standalone: true,
  imports: [CommonModule, MaterialModule, MatDialogModule],
  templateUrl: './dialog-logeo.component.html',
  styleUrls: ['./dialog-logeo.component.scss'],
})
export class DialogLogeoComponent {
  constructor(public dialogRef: MatDialogRef<DialogLogeoComponent>,
            private userService : UserService) {}

  /**
   * Redirecciona al oauth2
   */
  login() {
    this.userService.login()


  }

  /**
   * Limpia el localStorage
   * Y te redirecciona al inicio
   */
  logout() {
    this.userService.logout();
  }
}
