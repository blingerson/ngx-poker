import { Component, Input, OnInit } from '@angular/core';
import { Blinds } from './Blinds';

@Component( {
    selector : 'app-blinds',
    templateUrl: './blinds.component.html',
    styleUrls: ['./blinds.component.scss']
} )
export class BlindsComponent implements OnInit {
    @Input() blinds : Blinds = new Blinds();
    constructor() {}

    ngOnInit() {
    }

}
