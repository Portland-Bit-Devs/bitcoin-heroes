import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  heroes: Hero[] = [];
  hero: Hero = {
    id: 0,
    name: '',
    power: '',
    quote: '',
  };
  powers = ['Truth', 'Fear', 'Logic', 'Clarity', 'Confusion', 'Ponzi Schemes', 'Leverage', 'None'];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  async getHeroes(): Promise<void> {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSubmit(): void {
    this.heroService.addHero({
      id: this.heroes.length + 1,
      name: this.hero.name,
      power: this.hero.power,
      quote: this.hero.quote
    })
      .subscribe(hero => this.heroes.push(hero))
    this.hero = {
      id: 0,
      name: '',
      power: '',
      quote: '',
    }
  }
}
