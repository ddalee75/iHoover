import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasImgComponent } from './canvas-img.component';

describe('CanvasImgComponent', () => {
  let component: CanvasImgComponent;
  let fixture: ComponentFixture<CanvasImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
