import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public layaoutSrv: LayoutService) {
    // Recupera el valor de "isExpand" del localStorage al iniciar el componente
    const localStorageIsExpand = localStorage.getItem('isExpand');
    if (localStorageIsExpand) {
      this.layaoutSrv.isExpand = JSON.parse(localStorageIsExpand);
    }
  }
}
