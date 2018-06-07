import { BuyIn, BuyInType } from 'src/app/pot/BuyIn';
import { Player } from 'src/app/player/Player';
import { findLast, pull, filter } from 'lodash';

export class Pot {
    buyIns : BuyIn[] = [];
    constructor(
        public buyInPrice : number = 20,
    ) {}
    get total() : number {
        return this.buyIns.length * this.buyInPrice;
    }
    get firstPrize() : number {
        switch( this.buyIns.length ) {
            case 0 :
            case 1 :
                return this.total;
            case 2 :
                return this.total * 0.7;
            default :
                return this.total * 0.5;
        }
    }
    get secondPrize() : number {
        switch( this.buyIns.length ) {
            case 0 :
            case 1 :
                return 0;
            default :
                return this.total * 0.3;
        }
    }
    get thirdPrize() : number {
        return this.buyIns.length > 3 ? this.total * .2 : 0;
    }

    addBuyIn( player : Player ) : void {
        this.buyIns.push( new BuyIn( player ) );
    }

    /**
     * removes the last buyIn player made
     * @param {Player} player
     */
    removeBuyIn( player : Player ) : void {
        pull( this.buyIns, findLast( this.buyIns, { player } ) );
    }

    getPlayerBuyIns( player : Player ) : BuyIn[] {
        return this.buyIns.filter( buyIn => buyIn.player === player );
    }

    getPlayerDebt( player : Player ) : number {
        const playerBuyIns = this.getPlayerBuyIns( player );
        console.log( player, playerBuyIns );
        return this.buyInPrice * filter( playerBuyIns, { type : BuyInType.Credit } ).length;
    }
}
