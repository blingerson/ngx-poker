
export class Blind {
    big : number;
    small : number;

    constructor( props : Partial<Blind> = {} ) {
        Object.assign( this, props );
    }

    toString() {
        return `${ this.small } / ${ this.big }`;
    }
}
