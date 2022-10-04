import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadorGrillaComponent } from './paginador-grilla.component';

describe('PaginadorGrillaComponent', () => {
  let component: PaginadorGrillaComponent;
  let fixture: ComponentFixture<PaginadorGrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginadorGrillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginadorGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
