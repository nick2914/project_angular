import { Component, OnInit } from '@angular/core';
import { LessonsServices } from 'src/app/service/data_services/lessons.service';
import { Router } from '@angular/router';
import { DisplayService } from 'src/app/service/display.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {
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
