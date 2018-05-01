import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearchresults(preferences: string){
    return this.http.get('http://localhost:3000/search/' + preferences)
      .map((data: any) => {
        return data.obj;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }
}

