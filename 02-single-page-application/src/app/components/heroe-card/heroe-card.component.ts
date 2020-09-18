import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
// import { Router } from '@angular/router';

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

  @Output()
  public heroeSelected: EventEmitter<number>;

  // private router: Router;

  constructor(/* router: Router */) {
    // this.router = router;
    this.heroeSelected = new EventEmitter();
   }

  ngOnInit(): void {
  }

   public viewHeroe() {
  //   this.router.navigate(['/heroe', idx]);
      this.heroeSelected.emit(this.idx);
   }

}
