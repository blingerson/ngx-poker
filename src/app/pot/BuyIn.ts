import { Player } from 'src/app/player/Player';

export enum BuyInType {
    Cash,
    Credit,
}

export class BuyIn {
    constructor(
        public player : Player,
        public type : BuyInType = BuyInType.Cash,
        public time : Date = new Date(),
    ) {}
}
``
