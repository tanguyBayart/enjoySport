import { Routes } from '@angular/router';
import { AuthComponent } from './session/auth/auth.component';
import { InscriptionComponent } from './session/inscription/inscription.component';
import { CardioViewComponent } from './cardio-view/cardio-view.component';
import { MuscuViewComponent } from './muscu-view/muscu-view.component';
import { NewsComponent } from './news/news.component';
import { TipsComponent } from './tips-view/tips-view.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { VideosComponent } from './videos/videos.component';

export const appRoutes: Routes = [
  { path: 'home', component: WelcomeViewComponent },
  { path: 'muscu', component: MuscuViewComponent },
  { path: 'cardio', component: CardioViewComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'connect', component: AuthComponent },
  { path: 'subscribe', component: InscriptionComponent },
  { path: '', component: WelcomeViewComponent },
  { path: '*', redirectTo: '' },
  // replaced by VideosComponent
  // { path: 'news', component: NewsComponent },
];
