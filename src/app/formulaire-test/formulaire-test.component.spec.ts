import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireTestComponent } from './formulaire-test.component';

describe('FormulaireTestComponent', () => {
  let component: FormulaireTestComponent;
  let fixture: ComponentFixture<FormulaireTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireTestComponent]
    });
    fixture = TestBed.createComponent(FormulaireTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
