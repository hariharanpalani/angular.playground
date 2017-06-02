import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent, PanelComponent } from './components';

const components = [
  SidebarComponent,
  PanelComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
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
