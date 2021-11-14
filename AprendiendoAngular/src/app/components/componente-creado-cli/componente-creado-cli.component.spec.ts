import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCreadoCliComponent } from './componente-creado-cli.component';

describe('ComponenteCreadoCliComponent', () => {
  let component: ComponenteCreadoCliComponent;
  let fixture: ComponentFixture<ComponenteCreadoCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteCreadoCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCreadoCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
