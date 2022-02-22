import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SidebarComponent, MainComponent, FooterComponent],
  exports: [SidebarComponent, MainComponent, FooterComponent],
  imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}
