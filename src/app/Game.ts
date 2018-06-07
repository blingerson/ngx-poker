import { Player } from 'src/app/player/Player';
import { Blinds } from 'src/app/blinds/Blinds';
import { Countdown } from 'src/app/countdown-timer/countdown';
import { Pot } from 'src/app/pot/Pot';

export class Game {
    players : Map<string, Player> = new Map();
    blinds : Blinds = new Blinds();
    countdown : Countdown = new Countdown();
    pot : Pot = new Pot();

    addPlayer( { name } : Partial<Player> ) {
        if( !this.players.has( name ) ) {
            const player = new Player( { name } );
            this.players.set( name, player );
            this.pot.addBuyIn( player );
        } else {
            throw new Error( 'Player already exists!' );
        }
    }
}
