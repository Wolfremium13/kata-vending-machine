export class Coin {
	constructor(private readonly value: number) {}
	static nickel() {
		return new Coin(0.05);
	}
	static invalid() {
		return new Coin(0);
	}

	valueInDollars(): number {
		return this.value;
	}
}
