import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDrinksComponent } from './btn-drinks.component';

describe('BtnDrinksComponent', () => {
  let component: BtnDrinksComponent;
  let fixture: ComponentFixture<BtnDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDrinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
