import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyfansComponent } from './onlyfans.component';

describe('OnlyfansComponent', () => {
  let component: OnlyfansComponent;
  let fixture: ComponentFixture<OnlyfansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlyfansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyfansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
