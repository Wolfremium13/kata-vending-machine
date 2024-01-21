import { CoinReader } from './interfaces/coin.reader';
import { CoinReturner } from './interfaces/coin.return';
import { Displayable } from './interfaces/displayer';

export class VendingMachine {
	constructor(
		private readonly coinReader: CoinReader,
		private readonly coinReturner: CoinReturner,
		private readonly displayable: Displayable
	) {}

	public insertCoin(): void {}
}
