import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErorPageComponent } from './eror-page.component';

describe('ErorPageComponent', () => {
  let component: ErorPageComponent;
  let fixture: ComponentFixture<ErorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
