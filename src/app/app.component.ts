import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Game } from 'src/app/Game';

@Component( {
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls : [ './app.component.scss' ]
} )
export class AppComponent implements OnInit, OnDestroy {
    private events : Subscription = new Subscription();
    public title = 'Project Houston';
    public game = new Game();
    @HostBinding( 'class.blink-on' ) public blinkOn : boolean = false;

    ngOnInit() {
        this.events.add( this.game.countdown.reset$.subscribe( () => {
            const counter = 0;
            const blinkTimer = interval( 300 ).subscribe( () => {
                this.blinkOn = !this.blinkOn;
                if( counter === 7 ) {
                    blinkTimer.unsubscribe();
                    this.events.remove( blinkTimer );
                }
                counter ++;
            } );
        } ) );
    }

    ngOnDestroy() {
        this.events.unsubscribe();
    }
}
