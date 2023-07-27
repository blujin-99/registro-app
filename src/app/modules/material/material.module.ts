import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [MatTabsModule, MatTableModule, MatInputModule, MatFormFieldModule],
})
export class MaterialModule {}
