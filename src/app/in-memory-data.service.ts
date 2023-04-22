import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const heroes = [
      { id: 1, name: 'Michael Saylor', power: 'Chairman', quote: 'Bitcoin is a swarm of cyber hornets serving the goddess of wisdom, feeding on the fire of truth, exponentially growing ever smarter, faster, and stronger behind a wall of encrypted energy.' },
      { id: 2, name: 'Elon Musk', power: 'Rockets', quote: 'Bitcoin is the most accessible form of money ever created.' },
      { id: 3, name: 'Peter Thiel', power: 'Super Speed', quote: 'Bitcoin is the most disruptive form of money ever created.' },
      { id: 4, name: 'Cameron Winklevoss', power: 'Venture Capital', quote: 'Bitcoin is the most secure form of money ever created.' },
      { id: 5, name: 'Peter Schiff', power: 'Gold', quote: 'Bitcoin is a digital gold that is immune to inflation and confiscation.' },
      { id: 6, name: 'Satoshi Nakamoto', power: 'Creator', quote: 'Bitcoin is a peer-to-peer electronic cash system that is revolutionizing the way we think about money.' },
      { id: 7, name: 'Andreas Antonopoulos', power: 'Coding', quote: 'Bitcoin is a revolution that is still unfolding, and we are only just beginning to see its potential.' },
      { id: 8, name: 'Max Keiser', power: 'Prophet', quote: 'Bitcoin is a financial revolution.' },
      { id: 9, name: 'Gavin Andresen', power: 'Weather Change', quote: 'Bitcoin is a decentralized currency.' }
    ];
    return { heroes };
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 10;
  }
}
