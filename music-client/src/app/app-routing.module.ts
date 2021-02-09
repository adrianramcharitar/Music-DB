import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtistPageComponent} from './components/artist-page/artist-page.component';
import {SongPageComponent} from './components/song-page/song-page.component';
import {AlbumPageComponent} from './components/album-page/album-page.component';


const routes: Routes = [
  { path: 'artists', component: ArtistPageComponent },
  { path: 'albums', component: AlbumPageComponent },
  { path: 'songs', component: SongPageComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
