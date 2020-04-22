import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { EnvironmentUrlService } from './shared/services/environment-url.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainmenuComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: '404', component: NotFoundComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: '**', redirectTo: '/404', pathMatch: 'full'},
    ])
  ],
  providers: [EnvironmentUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
