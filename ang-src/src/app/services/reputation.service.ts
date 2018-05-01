import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ReputationService {

  constructor(private http: HttpClient) { }
  getReputation(selected: string){
    return this.http.get('http://localhost:3000/reputation/' + selected)
      .map((data: any) => {
        return data.obj;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
