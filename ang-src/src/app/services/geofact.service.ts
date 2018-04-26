import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class GeofactService {

  constructor(private http: HttpClient) { }

  getFacts(selected: string){
    return this.http.get('http://localhost:3000/geofact/' + selected)
      .map((data: any) => {
        console.log(data);
        return data.obj;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
