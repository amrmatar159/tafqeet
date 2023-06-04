import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TafqeetLibComponent } from './tafqeet-lib.component';

describe('TafqeetLibComponent', () => {
  let component: TafqeetLibComponent;
  let fixture: ComponentFixture<TafqeetLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TafqeetLibComponent]
    });
    fixture = TestBed.createComponent(TafqeetLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
