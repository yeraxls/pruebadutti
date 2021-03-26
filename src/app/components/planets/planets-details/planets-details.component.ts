import { Component, Input, OnInit } from '@angular/core';
import { modAppPlanets } from 'src/app/class/modAppPlanets';
import { modAppPlanetsDialog } from 'src/app/class/modAppPlanetsDialog';
import { modAppShipsDialog } from 'src/app/class/modAppShipsDialog';
declare var $: any;

@Component({
  selector: 'planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.scss']
})
export class PlanetsDetailsComponent implements OnInit {
  @Input() dataList: modAppPlanets[];
  config: any;
  shipId: string = '';
  url: string = '';
  details : modAppPlanetsDialog = {urls:[]} as modAppPlanetsDialog;
  constructor() { }

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.dataList.length
    };
  }
  urlImg = "https://starwars-visualguide.com/assets/img/planets/";
  getStarshipId(url) {
    this.shipId = url.split('/');
    const urlImage = `${this.urlImg}${this.shipId[this.shipId.length - 2]}.jpg`
    return urlImage;
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  openDetails(details: modAppPlanets) {
    $("#exampleModal").modal('show');
    this.details ={ 
      urls : details.residents,
      name: details.name
     }
 }
 urlImgDialog = "https://starwars-visualguide.com/assets/img/characters/";
 getimgDialog(url) {
  this.shipId = url.split('/');
  const urlImage = `${this.urlImgDialog}${this.shipId[this.shipId.length - 2]}.jpg`
  return urlImage;
}
}
