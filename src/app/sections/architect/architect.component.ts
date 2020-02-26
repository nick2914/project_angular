import { Component, OnInit } from '@angular/core';
import { LessonsServices } from 'src/app/service/data_services/lessons.service';
import { Lesson } from 'src/app/model/lesson.model';
import { DisplayService } from 'src/app/service/display.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-architect',
  templateUrl: './architect.component.html',
  styleUrls: ['./architect.component.scss']
})
export class ArchitectComponent implements OnInit {
  url: string;
  now: any;

  constructor(
    private _lessonsService: LessonsServices,
    private _displayService: DisplayService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.url = this.router.url.substr(1);
    this.now = this._displayService.handleNow();
  }

}
