import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatechambreComponent } from './updatechambre.component';

describe('UpdatechambreComponent', () => {
  let component: UpdatechambreComponent;
  let fixture: ComponentFixture<UpdatechambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatechambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatechambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
