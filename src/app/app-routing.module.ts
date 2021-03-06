import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchitectComponent } from './sections/architect/architect.component';
import { ModuleComponent } from './sections/module/module.component';
import { ComponentComponent } from './sections/component/component.component';
import { BindingComponent } from './sections/binding/binding.component';
import { StylingComponent } from './sections/styling/styling.component';
import { RoutingComponent } from './sections/routing/routing.component';
import { PagenotfoundComponent } from './sections/pagenotfound/pagenotfound.component';
import { LessonDetailComponent } from './reusable component/lesson-detail/lesson-detail.component';
import { AdminpageComponent } from './sections/adminpage/adminpage.component';
import { TestComponent } from './sections/test/test.component';


const routes: Routes = [
  {path: 'architect', component: ArchitectComponent},
  {path: 'module', component: ModuleComponent},
  {path: 'component', component: ComponentComponent},
  {path: 'binding', component: BindingComponent},
  {path: 'styling', component: StylingComponent},
  {path: 'routing', component: RoutingComponent},
  {path: 'detail/:id', component: LessonDetailComponent},
  {path: 'admin', component: AdminpageComponent},
  {path: '', redirectTo: 'architect', pathMatch: 'full'},
  {path: 'test', component: TestComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
