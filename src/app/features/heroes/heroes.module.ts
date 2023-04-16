import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { CardComponent } from './card.component';


@NgModule({
  declarations: [
    HeroesComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  exports: [
    HeroesComponent,
    CardComponent
  ]
})
export class HeroesModule { }
