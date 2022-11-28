import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { Nav2Component } from './component/nav2/nav2.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RepoComponent } from './component/repo/repo.component';

const routes: Routes = [
  {path: 'footer',component:FooterComponent},
  {path: 'nav2',component:Nav2Component},
  {path: 'navbar',component:NavbarComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'repo',component:RepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
