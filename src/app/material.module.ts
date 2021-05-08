import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';

// const myModule= [MatFormFieldModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule];
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatButtonModule,MatProgressSpinnerModule,MatChipsModule
  ],
  exports:[MatFormFieldModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatButtonModule,MatProgressSpinnerModule,MatChipsModule]
})
export class MaterialModule { }
