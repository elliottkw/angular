import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  private heroesService: HeroesService;
  private router: Router;

  constructor(heroesService: HeroesService, router: Router) { 
    this.heroesService = heroesService;
    this.router = router;
    // console.log("Constructor");
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    // console.log(this.heroes);
  }

  public viewHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
