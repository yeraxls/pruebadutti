import { Component, OnInit } from '@angular/core';
import { ShipsService } from 'src/app/services/ships.service';
import { Observable } from 'rxjs';
import { appState } from 'src/app/app.Reducer';
import { Store } from '@ngrx/store';
import * as fromShips  from '../../actions/general.action';
import { modAppShips } from 'src/app/class/modAppShips';
@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: Observable<modAppShips[]>;
  constructor( private shipsService: ShipsService,
    private store : Store<appState>){
      this.dataList = store.select('ships');
    }

  ngOnInit(): void {
    this.shipsService.getShips().subscribe(ships => 
      this.store.dispatch(new fromShips.saveShips(ships.results)));
  }
}
