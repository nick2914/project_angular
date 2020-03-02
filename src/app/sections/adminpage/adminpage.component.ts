import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { NodeDataService, Cat } from 'src/app/service/data_services/data-nodejs.service';




@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss'],
  
})
export class AdminpageComponent implements OnInit{

  @ViewChild('container', null) container: ElementRef;

  cats: Cat[];
  constructor(private nodeService: NodeDataService) {}
  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.nodeService.getAllCats().subscribe(data => {
      console.log('--------------' +data);
      this.cats = data.cats;
    });
    
  }
}