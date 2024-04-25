import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDessertsComponent } from './btn-desserts.component';

describe('BtnDessertsComponent', () => {
  let component: BtnDessertsComponent;
  let fixture: ComponentFixture<BtnDessertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDessertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnDessertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
