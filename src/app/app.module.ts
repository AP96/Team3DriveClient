import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';

import { EnvironmentUrlService } from './shared/services/environment-url.service';
import { RepositoryService } from './shared/services/repository.service';
//import { FilesListComponent } from './files/files-list/files-list.component';

/**
 * The method of importing modules has changed to dynamic import.
 * The dynamic import is promise-based and gives you access to the module,
 * where the module’s class can be called. 
 */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainmenuComponent,
    NotFoundComponent,
    //FilesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      //  { path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) }
      { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule)},
      { path: '404', component: NotFoundComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: '**', redirectTo: '/404', pathMatch: 'full'},
    ])
  ],
  providers: [EnvironmentUrlService, RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
