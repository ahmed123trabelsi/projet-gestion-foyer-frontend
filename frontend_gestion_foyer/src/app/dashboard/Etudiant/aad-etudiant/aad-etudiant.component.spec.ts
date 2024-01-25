import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadEtudiantComponent } from './aad-etudiant.component';

describe('AadEtudiantComponent', () => {
  let component: AadEtudiantComponent;
  let fixture: ComponentFixture<AadEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AadEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
