import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layouts/layout.component';


const routes: Routes = [
  { path: "", component: LayoutComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
