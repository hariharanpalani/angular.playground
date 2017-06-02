import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample.component';
import { GenUiModule } from '../UI';


const routes: Routes = [
  { path: 'sample', component: SampleComponent }
];

@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    GenUiModule
  ]
})
export class SampleModule {

}
