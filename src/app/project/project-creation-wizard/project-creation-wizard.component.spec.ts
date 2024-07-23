import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreationWizardComponent } from './project-creation-wizard.component';

describe('ProjectCreationWizardComponent', () => {
  let component: ProjectCreationWizardComponent;
  let fixture: ComponentFixture<ProjectCreationWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCreationWizardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCreationWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
