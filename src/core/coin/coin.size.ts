import { Either } from '../common/either';

export class CoinSize {
	constructor(private readonly size: number) {}
	static from(size: number): Either<Error, CoinSize> {
		if (size < 0) {
			return Either.left(new Error('Invalid coin size'));
		}
		return Either.right(new CoinSize(size));
	}

	static nickel(): CoinSize {
		return new CoinSize(21.21);
	}

	sizeInMillimeters(): number {
		return this.size;
	}
}
