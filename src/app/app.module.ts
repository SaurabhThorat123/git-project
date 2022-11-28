import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Nav2Component } from './component/nav2/nav2.component';
import { RepoComponent } from './component/repo/repo.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './component/profile/profile.component';
 import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Nav2Component,
    RepoComponent,
    FooterComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


