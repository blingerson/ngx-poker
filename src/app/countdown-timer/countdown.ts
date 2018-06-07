import { interval, Observable, Subject } from 'rxjs';
import { DecimalPipe } from '@angular/common';

export class Countdown {
    private interval$ : Observable<number> = interval( 1000 );
    private resetSubject : Subject<number> = new Subject();
    public reset$ : Observable<number>;
    public isCounting : boolean = false;
    public startTime : number = 15 * 60;
    public formatter = new DecimalPipe( 'en' );
    loop : boolean = true;
    secondsLeft : number; // default to 15 minutes
    constructor( props : Partial<Countdown> = {} ) {
        Object.assign<Countdown>( this, props );
        this.secondsLeft = this.startTime;
        this.reset$ = this.resetSubject.asObservable();
        this.interval$.subscribe( () => {
            this.tick();
        } );
    }
    toggle() : void {
        this.isCounting = !this.isCounting;
    }
    tick() : void {
        if( this.isCounting ) {
            if( this.secondsLeft === 0 && this.loop ) {
                this.setTime();
            }
            this.secondsLeft -= 1;
        }
    }
    setTime( timeInSeconds : number = this.startTime, shouldResetNext : boolean = true ) {
        this.secondsLeft = timeInSeconds;
        if( shouldResetNext ) {
            this.resetSubject.next( timeInSeconds );
        }
    }
    get minutes() {
        return Math.floor( this.secondsLeft / 60 );
    }
    get seconds() {
        return this.formatter.transform( this.secondsLeft % 60, '2.0' );
    }

    getToggleText() : string {
        return this.isCounting ? 'Stop' : 'Start';
    }

    toString() {
        return `${ this.minutes }:${ this.seconds }`;
    }
}
