import { Component, OnInit, Input } from '@angular/core';
import { modAppShipsDialog } from 'src/app/class/modAppShipsDialog';
import { modAppShips } from 'src/app/class/modAppShips';
import { ShipsService } from 'src/app/services/ships.service';
import { modAppFilms } from 'src/app/class/modAppFilms';
declare var $: any;


@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit {

  @Input() dataList: modAppShips[];
  config: any;
  shipId: string = '';
  url: string = '';
  // Modal
  details : modAppShipsDialog = {} as modAppShipsDialog;


  constructor(private shipsService: ShipsService) { 
  }
  
  ngOnInit(): void {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
      };
  }
 urlImg = "https://starwars-visualguide.com/assets/img/starships/";
  getStarshipId(url) {
    this.shipId = url.split('/');
    const urlImage = `${this.urlImg}${this.shipId[this.shipId.length - 2]}.jpg`
    return urlImage;
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
  
  
  _films: modAppFilms[] = [];
  get films(){
    return this._films;
  }
  openDetails(details:modAppShips) {
    details.films.forEach(f => this.getFilm(f));
     $("#exampleModal").modal('show');
     this.details = { 
       titleDetails: details.name,
      modelDetails: details.model,
      starship_class: details.starship_class
      }
  }
  getFilm(film: string): void {
    this.shipsService.getFilms(film).subscribe(f => this._films.push(f))
  }

}
