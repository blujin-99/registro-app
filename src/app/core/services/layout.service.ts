import { HostListener, Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  isExpand = false;

  openSidebar = false;
  constructor(private storageSrv:StorageService){

  }
  toggleSidebar() {
    this.isExpand = !this.isExpand;
    // Guarda el valor de "isExpand" en el localStorage
    this.storageSrv.isExpand=this.isExpand
  }

  /**
   * Muestra u oculta el sidebar en vista responsive
   */
  toggleListItems() {
    if (window.innerWidth < 768) {
      this.openSidebar = !this.openSidebar;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.mobileSidebar();
  }

  /**
   * Siempre que este en vista mobile el sidebar esta expandido
   */
  mobileSidebar() {
    if (window.innerWidth < 768) {
      this.isExpand = true;
      this.storageSrv.isExpand=this.isExpand
    }
  }
}
