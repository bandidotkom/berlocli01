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
        let result = {
          wm: [],
          wa: [],
          we: []
        };
        let proresultCat = []
        let proresultCheckin = []
        for (let d of data.obj){
          if (proresultCat.indexOf(d.category)>-1){//already had
            proresultCheckin[proresultCat.indexOf(d.category)].concat(d.checkins);
          }else{
            proresultCat.push(d.category);
            proresultCheckin.push(d.checkins);
          }
        }
        for (let i=0; i<proresultCat.length; i++){
          let wmVal = 0;
          let waVal = 0;
          let weVal= 0;
          for (let j=0; j<proresultCheckin[i].length; j++){
            if (proresultCheckin[i][j] == "WM"){wmVal+=1;}
            else if (proresultCheckin[i][j] == "WA"){waVal+=1;}
            else {weVal+=1;}
          }
          if (wmVal>0){result.wm.push({name: proresultCat[i], value: wmVal});}
          else if (waVal>0){result.wa.push({name: proresultCat[i], value: waVal});}
          else if (weVal>0){result.we.push({name: proresultCat[i], value: weVal});}
        }
        return result;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
