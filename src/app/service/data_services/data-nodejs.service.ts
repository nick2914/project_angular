import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface Cat {
    name: string
}

@Injectable({
    providedIn: 'root'
})
export class NodeDataService {

    httpOptions = {
        // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        headers: new HttpHeaders({ 'Content-Type': 'text/html' })
    };

    constructor(private _http: HttpClient) { }


    getAllCats(): Observable<any> {
        return this._http.get<any>('http://localhost:3000/', this.httpOptions);
    }
}