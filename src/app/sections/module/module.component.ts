import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayService } from 'src/app/service/display.service';
import { LessonsServices } from 'src/app/service/data_services/lessons.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  url: string;
  now: any;

  constructor(
    private _lessonsService: LessonsServices,
    private _displayService: DisplayService,
    private router: Router) { }

  ngOnInit() {
    this.url = this.router.url.substr(1);
    this.now = this._displayService.handleNow();
  }

}
