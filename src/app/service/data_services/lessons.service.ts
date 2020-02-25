import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';




@Injectable({
    providedIn: 'root'
})
export class LessonsServices {
    lessonsUrl = 'assets/lessons.json';
    constructor(private _http: HttpClient) {}

    getLessons() {
        return this._http.get(this.lessonsUrl);
    }
}