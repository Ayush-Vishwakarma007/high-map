import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highmaps";
import Drilldown from 'highcharts/modules/drilldown';


Drilldown(Highcharts);

declare var require : any;
const usaMap = require("@highcharts/map-collection/countries/in/custom/in-all-disputed.topo.json");

@Component({
  selector: 'app-usa-map',
  templateUrl: './usa-map.component.html',
  styleUrls: ['./usa-map.component.scss']
})
export class UsaMapComponent implements OnInit {
  Highcharts: any;
  chartConstructor = "mapChart";
  chartOptions : any;

  constructor(){}
  ngOnInit(): void {
    this.Highcharts = Highcharts;
    this.chartOptionsMap();
  }

  chartOptionsMap(){
    this.chartOptions = {
      chart: {
        height : 600,
        map : usaMap
      },
      title :{
        text : "Indian Map"
      },
      credits: {
        enabled: false
    },
      series : [
        {
        showInLegend: false,
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
        }
      ],
      tootip:{
        enabled:false
      },
      mapNavigation: {
        enabled: true,
      },
    };
  }
}
