import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AuthComponent } from './session/auth/auth.component';

//providers
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { TrainingViewComponent } from './components/training-view/training-view.component';
import { WelcomeViewComponent } from './components/welcome-view/welcome-view.component';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './components/news/news.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

//firebase imports
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// Charts
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';
import { CardioViewComponent } from './components/cardio-view/cardio-view.component';
import { MuscuViewComponent } from './components/muscu-view/muscu-view.component';
import { TipsComponent } from './components/tips-view/tips-view.component';

import { MatDialogModule } from '@angular/material/dialog';
//AUTH!!! BEGIN
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// import { InscriptionComponent } from './session/inscription/inscription.component';

//AUTH!!! END

import { EvolutionsComponent } from './components/evolutions/evolutions.component';
import { TipsInfoComponent } from './components/tipsInfo/tipsInfo.component';
import { VideosComponent } from './components/videos/videos.component';
import { InscriptionComponent } from './session/inscription/inscription.component';
import { VideoYtComponent } from './components/video-yt/video-yt.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingViewComponent,
    WelcomeViewComponent,
    NewsComponent,
    MuscuViewComponent,
    CardioViewComponent,
    TipsComponent,
    EvolutionsComponent,
    TipsInfoComponent,
    VideosComponent,
    AuthComponent,
    InscriptionComponent,
    VideoYtComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
    HttpClientModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
