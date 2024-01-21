import { Coin } from "../../interfaces/coin";

export class Quarter implements Coin {
	valueInDollars() {
		return 0.25;
	}
	sizeInMillimeters() {
		return 24.26;
	}
	weightInGrams() {
		return 5.67;
	}
}
