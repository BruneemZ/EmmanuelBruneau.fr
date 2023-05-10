import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { DatafireService } from '../service/datafire.service';

const appRoutes : Routes = [
  { path:'Privee', component: MainComponentComponent},
  { path:'Home', component: HomeComponentComponent},
  { path: '', component: HomeComponentComponent}, 
  { path: '**', redirectTo :'/Home'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DatafireService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
