import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/app.Reducer';
import { modAppPlanets } from 'src/app/class/modAppPlanets';
import { modAppShips } from 'src/app/class/modAppShips';
import { PlanetsService } from 'src/app/services/planets.service';
import * as fromPlanets  from '../../actions/general.action';

@Component({
  selector: 'planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  public dataList: Observable<modAppPlanets[]>;
  constructor(private planetsService: PlanetsService,
     private store: Store<appState>
    ) {
     this.dataList = store.select('planets');
  }

  ngOnInit(): void {
    this.planetsService.getPlanets().subscribe(planets =>{
      this.store.dispatch(new fromPlanets.savePlanets(planets.results));
    });
  }
}