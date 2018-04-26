import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";
@Injectable()
export class FactService {
  constructor(private http: HttpClient) { }

  getPopulation(selected: string) {
    return this.http.get('http://localhost:3000/fact/' + selected)
      .map((population: any) => {
        let rows = population.obj;
        let results = {
          gender: [
            {name: 'male', value: 0},
            {name: 'female', value: 0}],
          nationality: [
            {name: 'German', value: 0},
            {name: 'Foreigner', value: 0}],
          age: [
            {name: '0-5', value: 0},
            {name: '5-10', value: 0},
            {name: '10-15', value: 0},
            {name: '15-20', value: 0},
            {name: '20-25', value: 0},
            {name: '25-30', value: 0},
            {name: '30-35', value: 0},
            {name: '35-40', value: 0},
            {name: '40-45', value: 0},
            {name: '45-50', value: 0},
            {name: '50-55', value: 0},
            {name: '55-60', value: 0},
            {name: '60-65', value: 0},
            {name: '65-70', value: 0},
            {name: '70-75', value: 0},
            {name: '75-80', value: 0},
            {name: '80-85', value: 0},
            {name: '85-90', value: 0},
            {name: '90-95', value: 0},
            {name: '95-', value: 0},
          ]};
        for (let row of rows){
          if (row.Geschl == 1){
            results.gender[0].value += row.H;
          }else{
            results.gender[1].value += row.H;
          }
          if (row.Staatsangeh == "D"){
            results.nationality[0].value += row.H;
          }else{
            results.nationality[1].value += row.H;
          }
          if (row.Altersgr == "00_05"){
            results.age[0].value += row.H;
          }
          else if (row.Altersgr == "05_10"){
            results.age[1].value += row.H;
          }
          else if (row.Altersgr == "10_15"){
            results.age[2].value += row.H;
          }
          else if (row.Altersgr == "15_20"){
            results.age[3].value += row.H;
          }
          else if (row.Altersgr == "20_25"){
            results.age[4].value += row.H;
          }
          else if (row.Altersgr == "25_30"){
            results.age[5].value += row.H;
          }
          else if (row.Altersgr == "30_35"){
            results.age[6].value += row.H;
          }
          else if (row.Altersgr == "35_40"){
            results.age[7].value += row.H;
          }
          else if (row.Altersgr == "40_45"){
            results.age[8].value += row.H;
          }
          else if (row.Altersgr == "45_50"){
            results.age[9].value += row.H;
          }
          else if (row.Altersgr == "50_55"){
            results.age[10].value += row.H;
          }
          else if (row.Altersgr == "55_60"){
            results.age[11].value += row.H;
          }
          else if (row.Altersgr == "60_65"){
            results.age[12].value += row.H;
          }
          else if (row.Altersgr == "65_70"){
            results.age[13].value += row.H;
          }
          else if (row.Altersgr == "70_75"){
            results.age[14].value += row.H;
          }
          else if (row.Altersgr == "75_80"){
            results.age[15].value += row.H;
          }
          else if (row.Altersgr == "80_85"){
            results.age[16].value += row.H;
          }
          else if (row.Altersgr == "85_90"){
            results.age[17].value += row.H;
          }
          else if (row.Altersgr == "90_95"){
            results.age[18].value += row.H;
          }
          else if (row.Altersgr == "95_"){
            results.age[19].value += row.H;
          }
        };
        //console.log(results);
        return results;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
