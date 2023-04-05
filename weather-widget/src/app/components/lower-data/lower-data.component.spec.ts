import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerDataComponent } from './lower-data.component';

describe('LowerDataComponent', () => {
  let component: LowerDataComponent;
  let fixture: ComponentFixture<LowerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
