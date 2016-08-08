import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template : `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
      <router-outlet></router-outlet>
    </nav>
  `,
  directives: [ROUTER_DIRECTIVES],
  precompile: [HeroesComponent, DashboardComponent],
  providers: [HeroService],
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}