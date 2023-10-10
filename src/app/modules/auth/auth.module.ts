import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SideBarComponent } from 'src/app/core/layout/side-bar/side-bar.component';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, SideBarComponent],
  exports: [AuthPageComponent, AuthRoutingModule],
})
export class AuthModule {
  
}
