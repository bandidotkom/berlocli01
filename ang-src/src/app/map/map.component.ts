import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Output() onSelected: EventEmitter<any> = new EventEmitter<any>();
  selected: String;
  layers: L.Layer[];
  options: {};

  constructor(private http: HttpClient) {
  }

  ngOnInit() { // add base OSM layer and options
    let baseOSMLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Open Street Map'
    });
    this.layers = [baseOSMLayer];
    this.options = {
      zoom: 10,
      center: L.latLng([52.520008, 13.404954])
    };
  }//ngOnInit()

  onMapReady(map: L.Map) {
    this.http.get<any>('assets/data/berlin_ortsteile.geojson')
      .subscribe(geo => {
        let localtiesLayer = L.geoJSON(geo, {
          style: () => ({
            color: "#464646",
            weight: 2,
            opacity: 0.6,
            fillOpacity: 0.1,
            fillColor: "#464646"
          }),
          onEachFeature: (feature, layer) => {
            let popup = L.popup().setContent(feature.properties.Name);
            layer.bindPopup(popup);

            layer.on({
              mouseover: () => {
                layer.openPopup();
              },
              click: (e) => {
                this.selected = feature.properties.Name;
                console.log(this.selected);
                this.onSelected.emit(this.selected);
                map.fitBounds(e.target.getBounds());
              }
            });
          }
        }); // get localties layer
        this.layers[1] = localtiesLayer;
      });
  }


}
