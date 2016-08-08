import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {

  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHero(index: number) {
    return Promise.resolve(HEROES.find(hero => hero.id === index));
  }

  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve => 
      setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    )
  }
}
