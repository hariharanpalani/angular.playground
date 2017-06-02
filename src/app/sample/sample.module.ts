import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample.component';
import { GenUiModule } from '../UI';
import { HelpComponent } from './help/help.component';


const routes: Routes = [{
    path: 'sample',
    component: SampleComponent,
    children: [{
      path: 'help', component: HelpComponent
    }]
  }
];

@NgModule({
  declarations: [
    SampleComponent,
    HelpComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    GenUiModule
  ]
})
export class SampleModule {

}
