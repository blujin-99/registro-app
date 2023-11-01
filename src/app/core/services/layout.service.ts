import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  isExpand = false;

  openSidebar = false;

  toggleSidebar() {
    this.isExpand = !this.isExpand;
    // Guarda el valor de "isExpand" en el localStorage
    localStorage.setItem('isExpand', JSON.stringify(this.isExpand));
  }

  /**
   * Muestra u oculta el sidebar en vista responsive
   */
  toggleListItems() {
    this.openSidebar = !this.openSidebar;
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

      localStorage.setItem('isExpand', JSON.stringify(this.isExpand));
    }
  }
}
