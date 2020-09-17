import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input()
  public heroe: Heroe;

  @Input()
  public idx: number;

  private router: Router;

  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
  }

  public viewHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
