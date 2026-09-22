import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JigglypuffComponent } from './jigglypuff.component';

describe('JigglypuffComponent', () => {
  let component: JigglypuffComponent;
  let fixture: ComponentFixture<JigglypuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JigglypuffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JigglypuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
