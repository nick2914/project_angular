import { Component, OnInit, Input } from '@angular/core';
import { LessonsServices } from 'src/app/service/data_services/lessons.service';
import { DisplayService } from 'src/app/service/display.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from 'src/app/model/lesson.model';


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
})
export class LessonsComponent implements OnInit {
  @Input() url: string;
  lessons;
  now: any;

  constructor(
    private _lessonsService: LessonsServices,
    private _displayService: DisplayService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.now = this._displayService.handleNow();
    this.showLessons(this.url);
  }

  showLessons(url: string) {
    this._lessonsService.getLessons().subscribe((data: Lesson[]) => {
      this.lessons = data.filter(x => x.section == url)
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
