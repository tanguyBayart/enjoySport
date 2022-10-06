import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CardioViewComponent } from './cardio-view/cardio-view.component';
import { MuscuViewComponent } from './muscu-view/muscu-view.component';
import { NewsComponent } from './news/news.component';
import { TipsComponent } from './tips/tips.component';
import { TrainingViewComponent } from './training-view/training-view.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';

export const appRoutes: Routes = [
  // { path: 'auth/signup', component: SignupComponent },
  // { path: 'auth/signin', component: SigninComponent },
  { path: 'home', component: WelcomeViewComponent },
  // { path: 'connect', component: SignupComponent },
  { path: 'connect', component: AuthComponent },
  { path: 'muscu', component: MuscuViewComponent },
  { path: 'cardio', component: CardioViewComponent },
  { path: 'tips', component: TipsComponent },

  { path: 'news', component: NewsComponent },
  { path: '', component: WelcomeViewComponent },

  // redirection pour eviter les 404
  { path: '*', redirectTo: '' },
];
