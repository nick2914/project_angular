import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app-material.module';
import { ArchitectComponent } from './sections/architect/architect.component';
import { ModuleComponent } from './sections/module/module.component';
import { ComponentComponent } from './sections/component/component.component';
import { DirectiveComponent } from './sections/directive/directive.component';
import { RoutingComponent } from './sections/routing/routing.component';
import { StylingComponent } from './sections/styling/styling.component';
import { BindingComponent } from './sections/binding/binding.component';
import { PagenotfoundComponent } from './sections/pagenotfound/pagenotfound.component';
import { LessonsComponent } from './reusable component/lessons/lessons.component';
import { LessonDetailComponent } from './reusable component/lesson-detail/lesson-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchitectComponent,
    ModuleComponent,
    ComponentComponent,
    DirectiveComponent,
    RoutingComponent,
    StylingComponent,
    BindingComponent,
    PagenotfoundComponent,
    LessonsComponent,
    LessonDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
