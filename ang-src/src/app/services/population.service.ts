import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";
@Injectable()
export class PopulationService {
  constructor(private http: HttpClient) { }

  getPopulation(selected: string) {
    return this.http.get('http://localhost:3000/population/' + selected)
      .map((data: any) => {
        for (const d of data.obj){
          console.log(d.name);
        }
        return data;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
