import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-link',
  templateUrl: './btn-link.component.html',
  styleUrls: ['./btn-link.component.scss'],
})
export class BtnLinkComponent {
  @Input({ required: true }) ruta = '';
  @Input({ required: true }) titulo = '';
}
