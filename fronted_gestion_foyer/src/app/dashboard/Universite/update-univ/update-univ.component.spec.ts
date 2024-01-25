import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUnivComponent } from './update-univ.component';

describe('UpdateUnivComponent', () => {
  let component: UpdateUnivComponent;
  let fixture: ComponentFixture<UpdateUnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUnivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
