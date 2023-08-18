import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIf } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Share1Component } from './share1/share1.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { Womenmurders1Component } from './womenmurders1/womenmurders1.component';
@NgModule({
  declarations: [
    AppComponent,
    Share1Component,
    ReadComponent,
    UpdateComponent,

    Womenmurders1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
