import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent, PanelComponent } from './components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const components = [
  SidebarComponent,
  PanelComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    ...components
  ]
})
export class GenUiModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: GenUiModule,
      providers: []
    }
  }
}
