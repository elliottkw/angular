import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public foundHeroes: Heroe[] = [];

  private heroesService: HeroesService;
  private activatedRoute: ActivatedRoute;
  private router: Router;

  constructor(activatedRoute: ActivatedRoute, heroesService: HeroesService, router: Router) {
    this.activatedRoute = activatedRoute;
    this.heroesService = heroesService;
    this.router = router;

   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.foundHeroes = this.heroesService.findHeroes(params["text"]);
    });

  }

  public viewHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
