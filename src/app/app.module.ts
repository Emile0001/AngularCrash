import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringInterComponent } from './components/string-inter/string-inter.component';
import { PropBindingComponent } from './components/property-binding/prop-binding.component';
import { TwoWayBindingComponent } from './components/twoWay-binding/twoWay-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterComponent,
    PropBindingComponent,
    TwoWayBindingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
