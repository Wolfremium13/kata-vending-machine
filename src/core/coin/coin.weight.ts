import { Either } from '../common/either';

export class CoinWeight {
	private constructor(private readonly weight: number) {}
	static from(weight: number): Either<Error, CoinWeight> {
		if (weight < 0) {
			return Either.left(new Error('Invalid coin weight'));
		}
		return Either.right(new CoinWeight(weight));
	}
	weightInGrams() {
		return this.weight;
	}
}
