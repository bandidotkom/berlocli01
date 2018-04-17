import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";
@Injectable()
export class ActivityService {
  constructor(private http: HttpClient) { }

  getActivities(selected: string) {
    return this.http.get('http://localhost:3000/activities/' + selected)
      .map((data: any) => {
        for (const d of data.obj){
          console.log(d);
        }
        return data;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
