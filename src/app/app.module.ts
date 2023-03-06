import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoverComponent } from './components/body/cover/cover.component';
import { BodyComponent } from './components/body/body.component';
import { TweetsComponent } from './components/body/tweets/tweets.component';
import { LeftSidebarComponent } from './components/body/left-sidebar/left-sidebar.component';
import { ExploreComponent } from './components/explore/explore.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/home/post/post.component';
import { TrendsComponent } from './components/home/trends/trends.component';
import { SuggestionsComponent } from './components/home/suggestions/suggestions.component';



const appRoute: Routes = [
  {path: 'profile', component: BodyComponent},
  {path: '', component: HomeComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'bookmarks', component: BookmarkComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoverComponent,
    LeftSidebarComponent,
    BodyComponent,
    TweetsComponent,
    ExploreComponent,
    HomeComponent,
    PostComponent,
    TrendsComponent,
    SuggestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
