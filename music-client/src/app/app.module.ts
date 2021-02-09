import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ArtistPageComponent } from './components/artist-page/artist-page.component';
import { AlbumPageComponent } from './components/album-page/album-page.component';
import { SongPageComponent } from './components/song-page/song-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistPageComponent,
    AlbumPageComponent,
    SongPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
