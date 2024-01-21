import { Coin } from './coin/coin';
import { UnknownCoin } from './coin/unknown.coin';
import { CoinReader } from './interfaces/coin.reader';
import { CoinReturner } from './interfaces/coin.return';
import { Displayable } from './interfaces/displayable';

export class VendingMachine {
	constructor(
		private readonly coinReader: CoinReader,
		private readonly coinReturner: CoinReturner,
		private readonly displayable: Displayable
	) {}

	public insertCoin(): void {
		const unknownCoin = this.coinReader.read();
		this.coinReturner.return(this.mapUnknownCoinToCoin(unknownCoin));

	}

	private mapUnknownCoinToCoin(unknownCoin: UnknownCoin): Coin {
		return Coin.invalid();
	}
}
