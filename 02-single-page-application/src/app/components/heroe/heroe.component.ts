import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  private activatedRoute: ActivatedRoute;
  private heroesService: HeroesService;
  public heroe: Heroe;

  constructor(activatedRoute: ActivatedRoute, heroesService: HeroesService) { 
    this.activatedRoute = activatedRoute;
    this.heroesService = heroesService;

    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id'])
      this.heroe = heroesService.getHeroe(params['id']);
      // console.log(this.heroe);
    });
  }

  ngOnInit(): void {
  }

}
