import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index/index.component';
import { HeaderComponent } from './header/header/header.component';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, HeaderComponent, ToolbarComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
