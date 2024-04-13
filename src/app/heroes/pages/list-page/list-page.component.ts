import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit{
public heroes:Hero[]=[];

constructor(private heroeService:HerosService){

}
  ngOnInit(): void {
    this.heroeService.getHeroes()
    .subscribe(heroes=>this.heroes=heroes)
  }
}
