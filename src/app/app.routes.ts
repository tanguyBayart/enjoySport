import { Routes } from '@angular/router';
import { AuthComponent } from './session/auth/auth.component';
import { CardioViewComponent } from './cardio-view/cardio-view.component';
import { MuscuViewComponent } from './muscu-view/muscu-view.component';
import { NewsComponent } from './news/news.component';
import { TipsComponent } from './tips-view/tips-view.component';
// import { TrainingViewComponent } from './training-view/training-view.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { VideosComponent } from './videos/videos.component';

export const appRoutes: Routes = [
  // { path: 'auth/signup', component: SignupComponent },
  // { path: 'auth/signin', component: SigninComponent },
  { path: 'home', component: WelcomeViewComponent },
  // { path: 'connect', component: SignupComponent },
  { path: 'connect', component: AuthComponent },
  { path: 'Muscu', component: MuscuViewComponent },
  { path: 'Cardio', component: CardioViewComponent },
  { path: 'tips', component: TipsComponent },

  { path: 'videos', component: VideosComponent },

  // { path: 'news', component: NewsComponent },
  { path: '', component: WelcomeViewComponent },

  // redirection pour eviter les 404
  { path: '*', redirectTo: '' },
];
