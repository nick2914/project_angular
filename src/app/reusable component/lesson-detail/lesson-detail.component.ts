import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {
  
  constructor(private router: Router,private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activedRoute.params['id']);
  }

}
