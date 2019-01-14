import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTabComponent } from './ngx-tab.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [NgxTabComponent, TabComponent, TabsComponent],
  imports: [
  	BrowserModule
  ],
  exports: [NgxTabComponent, TabComponent, TabsComponent]
})
export class NgxTabModule { }
