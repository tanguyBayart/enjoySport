import { Routes } from '@angular/router';
import { AuthComponent } from './session/auth/auth.component';
import { InscriptionComponent } from './session/inscription/inscription.component';
import { CardioViewComponent } from './components/cardio-view/cardio-view.component';
import { MuscuViewComponent } from './components/muscu-view/muscu-view.component';
import { NewsComponent } from './components/news/news.component';
import { TipsComponent } from './components/tips-view/tips-view.component';
import { WelcomeViewComponent } from './components/welcome-view/welcome-view.component';
import { VideosComponent } from './components/videos/videos.component';

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
