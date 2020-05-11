import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './../../shared/services/repository.service';
import { DBFile } from '../../interfaces/DBFile.model';
import { Observable } from 'rxjs/Observable';
import { error } from 'protractor';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})
export class FilesListComponent implements OnInit {
  allfiles: DBFile[] = [];


  constructor(private webrepository: RepositoryService) { }

  //     this.dataService.getDataDetails('someId').subscribe(data => console.log(data));

  ngOnInit(): void {
    this.getAllFiles();
  }

  getAllFiles() {
  // (res => {this.files = res as Observable<DBFile[]>
  //this.webtrepository.getFilesList().subscribe(res => {this.files = res as Observable<DBFile[]>});
  this.webrepository.getFilesList().subscribe(filesData => 
    this.allfiles = filesData
  );
  
  }

 

}
