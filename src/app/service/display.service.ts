import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class DisplayService {
    handleNow(): any {
        var today: any = new Date();
        var dd: any = today.getDate();

        var mm: any = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        today = mm + '-' + dd + '-' + yyyy;
        return today;
    }
}