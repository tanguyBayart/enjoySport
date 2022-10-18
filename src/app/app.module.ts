import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AuthComponent } from './session/auth/auth.component';

//providers
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { TrainingViewComponent } from './training-view/training-view.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';

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
// import { MatIconModule } from '@angular/material/icon';

// Charts
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routes';
import { CardioViewComponent } from './cardio-view/cardio-view.component';
import { MuscuViewComponent } from './muscu-view/muscu-view.component';
import { TipsComponent } from './tips-view/tips-view.component';

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
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TrainingViewComponent,
    WelcomeViewComponent,
    NewsComponent,
    MuscuViewComponent,
    CardioViewComponent,
    TipsComponent,
    EvolutionsComponent,
    TipsInfoComponent,
    VideosComponent,
    // InscriptionComponent,
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
    // MatIconModule,
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
