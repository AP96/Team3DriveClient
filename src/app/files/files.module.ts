import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 
import { FilesListComponent } from './files-list/files-list.component';
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'list', component: FilesListComponent }
    ])
  ],
  declarations: [
    FilesListComponent
  ]
})
export class FilesModule { }