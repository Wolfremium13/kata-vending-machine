import { Either } from '../common/either';
import { Coin } from './coin';
import { CoinSize } from './coin.size';
import { CoinWeight } from './coin.weight';
import { UnknownCoin } from './unknown.coin';

export class CoinFactory {
	constructor() {}
	create(coin: UnknownCoin): Either<Error, Coin> {
		if (!coin) {
			return Either.left(new Error('No coin'));
		}
		if (this.isNickel(coin.size, coin.weight)) {
			return Either.right(Coin.nickel());
		}
		return Either.left(new Error('Invalid coin'));
	}
	private isNickel(size: CoinSize, weight: CoinWeight): boolean {
		return size.sizeInMillimeters() === CoinSize.nickel().sizeInMillimeters() && weight.weightInGrams() === CoinWeight.nickel().weightInGrams();
	}
}
