import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Lesson } from 'src/app/model/lesson.model';
import { Observable } from 'rxjs';




@Injectable({
    providedIn: 'root'
})
export class LessonsServices {
    lessonsUrl = 'assets/lessons.json';
    constructor(private _http: HttpClient) {}

    getLessons(): Observable<Lesson[]> {
        return this._http.get<Lesson[]>(this.lessonsUrl);
    }

}