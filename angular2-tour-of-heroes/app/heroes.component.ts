import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  styleUrls: ['app/heroes.component.css'],
  selector: 'my-heroes',
  directives: [HeroDetailComponent],
  templateUrl: 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(
    private heroService: HeroService,
    private router: Router) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
 }
