import { Either } from '../common/either';
import { Coin } from './coin';
import { UnknownCoin } from './unknown.coin';

export class CoinFactory {
	constructor() {}
	create(coin: UnknownCoin): Either<Error, Coin> {
		if (!coin) {
			return Either.left(new Error('No coin'));
		}
		if (this.isNickel(coin)) {
			return Either.right(Coin.nickel());
		}
		return Either.left(new Error('Invalid coin'));
	}
	private isNickel(coin: UnknownCoin) {
		return coin.size === 21.21 && coin.weight === 5;
	}
}
