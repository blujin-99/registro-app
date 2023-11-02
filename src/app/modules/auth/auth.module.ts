import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule],
  exports: [AuthPageComponent, AuthRoutingModule],
})
export class AuthModule {}
