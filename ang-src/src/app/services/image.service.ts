import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";
@Injectable()
export class ImageService {
  constructor(private http: HttpClient) { }

  getImages(selected: string) {
    return this.http.get('http://localhost:3000/images/' + selected)
      .map((data: any) => {
        let urls = [];
        for (const d of data.obj){
          urls.push("https://farm" + d.farm + ".staticflickr.com/" + d.server + "/" + d.id + "_" + d.secret + ".jpg");
        }
        return urls;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
