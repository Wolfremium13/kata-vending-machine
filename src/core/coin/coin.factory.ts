import { Either } from '../common/either';
import { Coin } from '../interfaces/coin';
import { CoinParams } from './coin.params';
import { Dime } from './coins/dime';
import { Nickel } from './coins/nickel';
import { Quarter } from './coins/quarter';

export class CoinFactory {
	constructor() {}
	getInstanceFrom(coinParams: CoinParams): Either<Error, Coin> {
		if (!coinParams) {
			return Either.left(new Error('Invalid size or weight'));
		}
		if (this.isNickel(coinParams)) {
			return Either.right(new Nickel());
		}
		if (this.isDime(coinParams)) {
			return Either.right(new Dime());
		}
		if (this.isQuarter(coinParams)) {
			return Either.right(new Quarter());
		}
		return Either.left(new Error('Unknown coin'));
	}
	private isNickel(coinParams: CoinParams): boolean {
		const nickel = new Nickel();
		return nickel.sizeInMillimeters() === coinParams.size && nickel.weightInGrams() === coinParams.weight;
	}
	private isDime(coinParams: CoinParams): boolean {
		const dime = new Dime();
		return dime.sizeInMillimeters() === coinParams.size && dime.weightInGrams() === coinParams.weight;
	}
	private isQuarter(coinParams: CoinParams): boolean {
		const quarter = new Quarter();
		return quarter.sizeInMillimeters() === coinParams.size && quarter.weightInGrams() === coinParams.weight;
	}
}
