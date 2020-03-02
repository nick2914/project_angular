import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Lesson } from 'src/app/model/lesson.model';
import { switchMap } from 'rxjs/operators';
import { LessonsServices } from 'src/app/service/data_services/lessons.service';
@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {
  lesson_detail$: Observable<Lesson>;

  constructor(private router: Router, private activedRoute: ActivatedRoute, private _lessonService: LessonsServices) { }

  ngOnInit() {
    this.lesson_detail$ = this.activedRoute.params.pipe(switchMap(params => this._lessonService.getLesson(+params['id'])));
  }

}
