import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPopUnivComponent } from './edit-pop-univ.component';

describe('EditPopUnivComponent', () => {
  let component: EditPopUnivComponent;
  let fixture: ComponentFixture<EditPopUnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPopUnivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPopUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
