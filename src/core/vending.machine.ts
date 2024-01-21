import { Coin } from './coin/coin';
import { CoinFactory } from './coin/coin.factory';
import { CoinReader } from './interfaces/coin.reader';
import { CoinReturner } from './interfaces/coin.return';
import { Displayable } from './interfaces/displayable';

export class VendingMachine {
	constructor(
		private readonly coinReader: CoinReader,
		private readonly coinReturner: CoinReturner,
		private readonly displayable: Displayable,
		private readonly coinFactory: CoinFactory = new CoinFactory(),
		private coins: Coin[] = []
	) {
		this.displayable.displayInsertCoin();
	}

	public insertCoin(): void {
		const unknownCoin = this.coinReader.read();
		const maybeCoin = this.coinFactory.create(unknownCoin);
		maybeCoin.fold(
			() => {
				this.coinReturner.return(unknownCoin);
			},
			(coin) => {
				this.coins.push(coin);
				this.displayable.displayBalance(this.getBalance());
			}
		);
	}

	private getBalance(): number {
		return this.coins.reduce((acc, coin) => acc + coin.valueInDollars(), 0);
	}
}
