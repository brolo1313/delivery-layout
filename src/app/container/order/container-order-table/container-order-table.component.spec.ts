import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerOrderTableComponent } from './container-order-table.component';

describe('ContainerOrderTableComponent', () => {
  let component: ContainerOrderTableComponent;
  let fixture: ComponentFixture<ContainerOrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerOrderTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
