import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerOrderWasteContractorComponent } from './container-order-waste-contractor.component';

describe('ContainerOrderWasteContractorComponent', () => {
  let component: ContainerOrderWasteContractorComponent;
  let fixture: ComponentFixture<ContainerOrderWasteContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerOrderWasteContractorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerOrderWasteContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
