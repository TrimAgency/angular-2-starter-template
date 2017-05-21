import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the required components needed to define the application routes:
// import { ExampleComponent } from './example/example.component';

const appRoutes: Routes = [

  // Then define routes here:
  // {
  //   path: 'example',
  //   component: ExampleComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
