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
import { MatInputModule } from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
// const myModule= [MatFormFieldModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule];
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,MatInputModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatButtonModule,MatProgressSpinnerModule,MatChipsModule,MatTableModule,MatPaginatorModule,MatSortModule
  ],
  exports:[MatFormFieldModule,MatInputModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatButtonModule,MatProgressSpinnerModule,MatChipsModule,MatTableModule,MatPaginatorModule,MatSortModule],
})
export class MaterialModule { }
