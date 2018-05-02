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
  }

  onMapReady(map: L.Map) {
    this.http.get<any>('assets/data/ortsteile.geojson')
      .subscribe(geo => {
        let localtiesLayer = L.geoJSON(geo, {
          style: () => ({
            color: "#6B1212",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.6,
            fillColor: "#FF0000"
          }),
          onEachFeature: (feature, layer) => {
            let popup = L.popup().setContent(feature.properties.Name);
            layer.bindPopup(popup);
            layer.on({
              mouseover: (e) => {
                e.target.openPopup();
              },
              click: (e) => {
                this.selected = feature.properties.Name;
                this.onSelected.emit(this.selected);
                map.fitBounds(e.target.getBounds());
                localtiesLayer.setStyle({fillOpacity: 0.6});
                e.target.setStyle({fillOpacity: 0.2});
                e.target.closePopup();
              }
            });
          }
        }); // get localties layer
        this.layers[1] = localtiesLayer;
      });
  }


}
