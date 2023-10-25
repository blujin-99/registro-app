import {
  Component,
  DoCheck,
  Input,
  effect,
  signal,
  HostListener
} from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   * Espera el nombre del proyecto
   */
  @Input() titulo: string = '';
  
  isDesktop : boolean = false

  constructor(public appSrv: AppService, public userSrv: UserService) {
    this.isDesktop = window.innerWidth >=768
  }

  @HostListener('window:resize', ['$event'])

  onResize(event:any){
     this.isDesktop = window.innerWidth >=768
  }

}
