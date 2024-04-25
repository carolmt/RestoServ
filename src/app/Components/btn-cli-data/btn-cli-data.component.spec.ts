import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCliDataComponent } from './btn-cli-data.component';

describe('BtnCliDataComponent', () => {
  let component: BtnCliDataComponent;
  let fixture: ComponentFixture<BtnCliDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnCliDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnCliDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
