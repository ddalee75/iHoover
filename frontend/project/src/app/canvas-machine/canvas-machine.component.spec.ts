import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasMachineComponent } from './canvas-machine.component';

describe('CanvasMachineComponent', () => {
  let component: CanvasMachineComponent;
  let fixture: ComponentFixture<CanvasMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
