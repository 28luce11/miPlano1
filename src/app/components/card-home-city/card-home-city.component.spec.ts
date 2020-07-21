import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHomeCityComponent } from './card-home-city.component';

describe('CardHomeCityComponent', () => {
  let component: CardHomeCityComponent;
  let fixture: ComponentFixture<CardHomeCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHomeCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHomeCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
