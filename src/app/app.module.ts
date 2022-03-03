import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{path:'first', component: FirstComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
