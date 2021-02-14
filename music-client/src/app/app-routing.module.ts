import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtistPageComponent} from './components/artist-page/artist-page.component';
import {SongPageComponent} from './components/song-page/song-page.component';
import {AlbumPageComponent} from './components/album-page/album-page.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {ArtistProfilePageComponent} from './components/artist-profile-page/artist-profile-page.component';
import { AlbumProfilePageComponent } from './components/album-profile-page/album-profile-page.component';


const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: MainPageComponent },
  { path: 'artists', component: ArtistPageComponent },
  { path: 'albums', component: AlbumPageComponent },
  { path: 'songs', component: SongPageComponent },
  { path: 'artistProfilePage', component: ArtistProfilePageComponent },
  { path: 'albumProfilePage', component: AlbumProfilePageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
