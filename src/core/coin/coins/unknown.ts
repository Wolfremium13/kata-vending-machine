import { Coin } from '../../interfaces/coin';

export class UnknownCoin implements Coin {
	valueInDollars() {
		return 0;
	}
	sizeInMillimeters() {
		return 0;
	}
	weightInGrams() {
		return 0;
	}
}
