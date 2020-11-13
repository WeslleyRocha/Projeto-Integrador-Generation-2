import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFeedComponent } from './carousel-feed.component';

describe('CarouselFeedComponent', () => {
  let component: CarouselFeedComponent;
  let fixture: ComponentFixture<CarouselFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
