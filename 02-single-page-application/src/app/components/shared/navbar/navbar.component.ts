import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private heroesService: HeroesService;
  private router: Router;

  constructor(heroesService: HeroesService, router: Router) {
    this.heroesService = heroesService;
    this.router = router;
   }

  ngOnInit(): void {
  }

  public searchHeroe(searchText: string) {
    // console.log(searchText);
    // console.log(this.heroesService.findHeroes(searchText));
    this.router.navigate(["/search", searchText]);
  }

}
