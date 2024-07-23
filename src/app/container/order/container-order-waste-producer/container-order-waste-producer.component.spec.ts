import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerOrderWasteProducerComponent } from './container-order-waste-producer.component';

describe('ContainerOrderWasteProducerComponent', () => {
  let component: ContainerOrderWasteProducerComponent;
  let fixture: ComponentFixture<ContainerOrderWasteProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerOrderWasteProducerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerOrderWasteProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
