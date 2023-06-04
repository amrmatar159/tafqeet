import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleTafqeetDemoComponent } from './sample-tafqeet-demo/sample-tafqeet-demo.component';
import{TafqeetLibModule} from 'tafqeet-lib';

@NgModule({
  declarations: [
    AppComponent,
    SampleTafqeetDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TafqeetLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
