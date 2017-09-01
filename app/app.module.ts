import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { TableListComponent }  from './TableList/TableList.component';
import { TableListService }  from './TableList/TableList.service';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, TableListComponent ],
  //bootstrap: [ AppComponent ]
  providers: [ TableListService ],
  bootstrap: [ TableListComponent ]
})
export class AppModule { }
