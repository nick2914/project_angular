import { Component, OnInit } from '@angular/core';
import { LessonsServices } from 'src/app/service/data_services/lessons.service';
import { Lesson } from 'src/app/model/lesson.model';

@Component({
  selector: 'app-architect',
  templateUrl: './architect.component.html',
  styleUrls: ['./architect.component.scss']
})
export class ArchitectComponent implements OnInit {
  lessons;
  constructor(private _lessonsService: LessonsServices) { }

  ngOnInit() {
    this.showLessons();
  }

  showLessons() {
    this.lessons = this._lessonsService.getLessons();
  }
}
