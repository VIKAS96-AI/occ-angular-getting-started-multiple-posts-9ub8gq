import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LikeComponent } from './like.component';
import { PostComponent } from './post.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LikeComponent, PostComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
