import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from 'src/app/player/Player';
import { FormControl } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/common/errorStateMatchers/unique';
import { alreadyExistsInMapValidator } from 'src/common/validators/alreadyExistsInMap/alreadyExistsInMap.validator';
import { BuyIn, BuyInType } from 'src/app/pot/BuyIn';

@Component( {
    selector : 'app-player',
    templateUrl : './player.component.html',
    styleUrls : [ './player.component.scss' ],
} )
export class PlayerComponent implements OnInit {
    @Input() buyIns : BuyIn[] = [];
    @Input() players : Map<string, Player> = new Map();
    @Output() addPlayer : EventEmitter<{ name : string }> = new EventEmitter();
    @Output() addBuyIn : EventEmitter<Player> = new EventEmitter();
    @Output() removeBuyIn : EventEmitter<Player> = new EventEmitter();
    playerName : FormControl;
    matcher = new MyErrorStateMatcher();
    creditType : number = BuyInType.Credit;
    cashType : number = BuyInType.Cash;

    getPlayersArray() : Player[] {
        return Array.from( this.players.values() );
    }

    onAddPlayer( name : string ) : void {
        if( this.playerName.valid ) {
            this.playerName.reset();
            this.addPlayer.emit( { name } );
        }
    }

    onAddBuyIn( player : Player ) {
        this.addBuyIn.emit( player );
    }

    onRemoveBuyIn( player : Player ) {
        this.removeBuyIn.emit( player );
        if( this.getPlayerBuyIns( player ).length === 0 ) {
            this.players.delete( player.name );
        }
    }

    ngOnInit() {
        this.playerName = new FormControl( null, alreadyExistsInMapValidator( this.players ) );
    }

    getPlayerBuyIns( player : Player ) : BuyIn[] {
        return this.buyIns.filter( buyIn => player === buyIn.player );
    }

    getPlayerDebts( player : Player ) {
        return this.getPlayerBuyIns( player ).filter( buyIn => buyIn.type === BuyInType.Credit ).length * 20;
    }

}
