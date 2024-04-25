import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFoodComponent } from './btn-food.component';

describe('BtnFoodComponent', () => {
  let component: BtnFoodComponent;
  let fixture: ComponentFixture<BtnFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
