// pages.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component'; // Cambié '../home/home.component' a './home.component'
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AboutUsComponent } from '../about-us/about-us.component'; // Asumí que 'about-us' está en la misma carpeta que 'home'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  declarations: [HomeComponent, ContactUsComponent, AboutUsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagesModule {}
