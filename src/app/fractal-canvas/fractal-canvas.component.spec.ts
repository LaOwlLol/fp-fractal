import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FractalCanvasComponent } from './fractal-canvas.component';

describe('FractalCanvasComponent', () => {
  let component: FractalCanvasComponent;
  let fixture: ComponentFixture<FractalCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FractalCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FractalCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
