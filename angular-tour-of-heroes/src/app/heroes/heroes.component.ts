import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  
  // Properties
  heroes = HEROES;
  selectedHero?: Hero;

  // Methods
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  }
}
