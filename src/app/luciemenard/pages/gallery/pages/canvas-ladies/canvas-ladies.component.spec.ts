import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasLadiesComponent } from './canvas-ladies.component';

describe('CanvasLadiesComponent', () => {
  let component: CanvasLadiesComponent;
  let fixture: ComponentFixture<CanvasLadiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasLadiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasLadiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
