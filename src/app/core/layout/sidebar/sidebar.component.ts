import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(
    public layaoutSrv: LayoutService,
    private storageSrv: StorageService
  ) {
    // Recupera el valor de "isExpand" del localStorage al iniciar el componente
    if (this.storageSrv.isExpand) {
      this.layaoutSrv.isExpand = this.storageSrv.isExpand;
    }
  }
}
