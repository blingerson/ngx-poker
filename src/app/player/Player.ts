import { uniqueId } from 'lodash';

export class Player {
    name : string;
    constructor( props : Partial<Player> ) {
        Object.assign<Player>( this, props );
    }
}
