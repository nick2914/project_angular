import { Component, OnInit } from '@angular/core';
import { LessonsServices } from 'src/app/service/data_services/lessons.service';
import { DisplayService } from 'src/app/service/display.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
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
