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
import { MainPageComponent } from './components/main-page/main-page.component';
import { TableListComponent } from './shared/table-list/table-list.component';
import { ArtistProfilePageComponent } from './components/artist-profile-page/artist-profile-page.component';
import { AlbumProfilePageComponent } from './components/album-profile-page/album-profile-page.component';
import { FormsModule } from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";

export function tokenGetter() {
  return localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
}

@NgModule({
  declarations: [
    AppComponent,
    ArtistPageComponent,
    AlbumPageComponent,
    SongPageComponent,
    MainPageComponent,
    TableListComponent,
    ArtistProfilePageComponent,
    AlbumProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
