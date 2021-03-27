import { Component, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationControlsComponent } from 'ngx-pagination';
import { PlanetsDetailsComponent } from './planets-details.component';

describe('PlanetsDetailsComponent', () => {
  let component: PlanetsDetailsComponent;
  let fixture: ComponentFixture<PlanetsDetailsComponent>;

  @Component({
    selector: 'pagination-controls',
    template: '<p>Mock Pagination controls Component</p>'
  })
  class MockPaginationControls {}
  @Pipe({name: 'paginate'})
  class MockPipe implements PipeTransform {
      transform(value: number): number {
          //Do stuff here, if you want
          return value;
      }
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsDetailsComponent, MockPaginationControls, MockPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
