import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkflowCardComponent } from './components/workflow-card/workflow-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { CreatorCardComponent } from './components/creator-card/creator-card.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    WorkflowCardComponent,
    HeaderComponent,
    FeatureCardComponent,
    CreatorCardComponent,
    BreadCrumbComponent,
    SubHeaderComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    WorkflowCardComponent,
    HeaderComponent,
    FeatureCardComponent,
    CreatorCardComponent,
    BreadCrumbComponent,
    SubHeaderComponent
  ]
})
export class SharedModule { }
