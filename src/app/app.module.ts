import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringInterComponent } from './components/string-inter/string-inter.component';
import { PropBindingComponent } from './components/property-binding/prop-binding.component';

@NgModule({
  declarations: [AppComponent, StringInterComponent, PropBindingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
