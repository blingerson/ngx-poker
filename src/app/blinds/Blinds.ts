import { Blind } from './Blind';

export const defaultBlinds : Partial<Blind>[] = [
    { big : 200, small : 100 },
    { big : 400, small : 200 },
    { big : 600, small : 300 },
    { big : 800, small : 400 },
    { big : 1000, small : 500 },
    { big : 1600, small : 800 },
    { big : 2000, small : 1000 },
    { big : 3000, small : 1500 },
    { big : 4000, small : 2000 },
    { big : 6000, small : 3000 },
    { big : 8000, small : 4000 },
    { big : 10000, small : 5000 },
    { big : 12000, small : 6000 },
];

export class Blinds {
    currentBlind : number = 0;
    blinds : Blind[];
    constructor( blinds : Partial<Blind>[] = defaultBlinds ) {
        this.blinds = Blinds.fromArray( blinds );
    }
    static fromArray( blinds : Partial<Blind>[] = [] ) {
        return blinds.map( blind => new Blind( blind ) );
    }
    get blind() : Blind {
        return this.blinds[ this.currentBlind ];
    }
    decrement() : void {
        if( this.currentBlind > 0 ) {
            this.currentBlind -= 1;
        }
    }
    increment() : void {
        if( this.currentBlind < this.blinds.length - 1 ) {
            this.currentBlind += 1;
        }
    }
}
