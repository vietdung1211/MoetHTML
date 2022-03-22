import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseComponent,
    ListCoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
