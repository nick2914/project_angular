import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Lesson } from 'src/app/model/lesson.model';
import { Observable, of } from 'rxjs';
import { switchMap, filter, find } from 'rxjs/operators';




@Injectable({
    providedIn: 'root'
})
export class LessonsServices {
    private lessonsUrl = 'api/lessons';
    constructor(private _http: HttpClient) {}

    getLessons(): Observable<Lesson[]> {
        return this._http.get<Lesson[]>(this.lessonsUrl);
    }

    getLesson(id: number): Observable<Lesson> {
       return this._http.get<Lesson>(`${this.lessonsUrl}/${id}`).pipe(find(data => data.id == id));
    }
    
}