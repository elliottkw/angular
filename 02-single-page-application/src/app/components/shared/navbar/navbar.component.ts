import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private heroesService: HeroesService;

  constructor(heroesService: HeroesService) {
    this.heroesService = heroesService;
   }

  ngOnInit(): void {
  }

  public searchHeroe(searchText: string) {
    // console.log(searchText);
    console.log(this.heroesService.findHeroes(searchText));
  }

}
