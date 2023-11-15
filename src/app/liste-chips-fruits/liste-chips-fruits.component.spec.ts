import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeChipsFruitsComponent } from './liste-chips-fruits.component';

describe('ListeChipsFruitsComponent', () => {
  let component: ListeChipsFruitsComponent;
  let fixture: ComponentFixture<ListeChipsFruitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeChipsFruitsComponent]
    });
    fixture = TestBed.createComponent(ListeChipsFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
