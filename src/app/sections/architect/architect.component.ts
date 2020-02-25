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
  now: any;

  constructor(private _lessonsService: LessonsServices) { }

  ngOnInit() {
    this.now = this.handleNow();
    this.showLessons();
  }

  showLessons() {
    this.lessons = this._lessonsService.getLessons();
  }

  handleNow(): any {
    var today: any = new Date();
    var dd: any = today.getDate();

    var mm: any = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }
    today = mm+'-'+dd+'-'+yyyy;
    return today;
  }
}
