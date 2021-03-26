import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';
import { Observable } from 'rxjs';
import { appState } from 'src/app/app.Reducer';
import { Store } from '@ngrx/store';
import * as fromShips  from '../../actions/ships.action';
@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: Observable<any[]>;
  constructor( private shipsService: ShipsService,
    private store : Store<appState>){
      this.dataList = store.select('ships');
    }

  ngOnInit(): void {
    this.shipsService.getShips().subscribe((ships) => {
      console.log(ships);
       this.store.dispatch(new fromShips.saveShips(ships.results));
      // this.dataList = ships.results;
      console.log('SHIPS -->', this.dataList)
    })
  }
}
