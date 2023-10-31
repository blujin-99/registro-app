import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  isExpand = false;

  toggleSidebar() {
    this.isExpand = !this.isExpand;
    // Guarda el valor de "isExpand" en el localStorage
    localStorage.setItem('isExpand', JSON.stringify(this.isExpand));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.mobileSidebar();
  }

  mobileSidebar() {
    if (window.innerWidth < 768) {
      this.isExpand = false;

      localStorage.setItem('isExpand', JSON.stringify(this.isExpand));
    }
  }
}
