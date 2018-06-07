
export class Blind {
    big : number;
    small : number;

    constructor( props : Partial<Blind> = {} ) {
        Object.assign<Blind>( this, props );
    }

    toString() {
        return `${ this.small } / ${ this.big }`;
    }
}
