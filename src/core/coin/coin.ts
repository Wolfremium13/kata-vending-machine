export class Coin {
	constructor(private readonly value: number) {}
	static nickel() {
		const valueInDollars = 0.05;
		return new Coin(valueInDollars);
	}
	valueInDollars(): number {
		return this.value;
	}
}
