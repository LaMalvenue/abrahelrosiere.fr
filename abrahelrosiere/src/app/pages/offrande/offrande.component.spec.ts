import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrandeComponent } from './offrande.component';

describe('OffrandeComponent', () => {
  let component: OffrandeComponent;
  let fixture: ComponentFixture<OffrandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffrandeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
