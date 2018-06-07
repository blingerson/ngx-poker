import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Countdown } from 'src/app/countdown-timer/countdown';
import { Subscription } from 'rxjs';


@Component( {
    selector : 'app-countdown-timer',
    templateUrl : './countdown-timer.component.html',
    styleUrls : [
        './countdown-timer.component.scss',
    ],
} )
export class CountdownTimerComponent implements OnInit, OnDestroy {
    @Input() countdownTimer : Countdown = new Countdown();
    @Output() onReset : EventEmitter<void> = new EventEmitter();
    private events : Subscription = new Subscription();

    ngOnDestroy() {
        this.events.unsubscribe();
    }

    ngOnInit() {
        this.events.add( this.countdownTimer.reset$.subscribe( () => this.onReset.emit() ) );
    }
}
