import { Component, Input, OnInit } from '@angular/core';
import { Pot } from 'src/app/pot/Pot';

@Component( {
  selector : 'app-pot',
  templateUrl : './pot.component.html',
  styleUrls : [
      './pot.component.scss',
  ],
} )
export class PotComponent implements OnInit {
    @Input() pot : Pot = new Pot();

    constructor() { }

    ngOnInit() {
    }

}
