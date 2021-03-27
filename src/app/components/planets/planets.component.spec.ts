import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { PlanetsService } from 'src/app/services/planets.service';

import { PlanetsComponent } from './planets.component';

describe('PlanetsComponent', () => {
  let component: PlanetsComponent;
  let fixture: ComponentFixture<PlanetsComponent>;
  const serviceMock ={
    getPlanets:function(){ return  new BehaviorSubject([])}
    
  }

  @Component({
    selector: 'planets-details',
    template: '<p>Mock planets Details</p>'
  })
  class MockPlanetDetails {
    @Input() dataList:any;
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsComponent, MockPlanetDetails ],
      // imports:[StoreModule.forRoot({ orders: ordersReducer })],
      providers:[
        {provide: PlanetsService, useValue: serviceMock} 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
