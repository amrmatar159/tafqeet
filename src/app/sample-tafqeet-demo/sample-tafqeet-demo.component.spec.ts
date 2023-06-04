import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTafqeetDemoComponent } from './sample-tafqeet-demo.component';

describe('SampleTafqeetDemoComponent', () => {
  let component: SampleTafqeetDemoComponent;
  let fixture: ComponentFixture<SampleTafqeetDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleTafqeetDemoComponent]
    });
    fixture = TestBed.createComponent(SampleTafqeetDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
