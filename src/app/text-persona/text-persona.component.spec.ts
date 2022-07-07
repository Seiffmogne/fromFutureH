import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPersonaComponent } from './text-persona.component';

describe('TextPersonaComponent', () => {
  let component: TextPersonaComponent;
  let fixture: ComponentFixture<TextPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
