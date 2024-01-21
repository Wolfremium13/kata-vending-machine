import { CoinFactory } from './coin/coin.factory';
import { Coin } from './interfaces/coin';
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
	) {}

	public insertCoin(): void {
		const coinParams = this.coinReader.read();
		this.coinFactory.getInstanceFrom(coinParams).fold(
			() => {
				if (coinParams) {
					this.coinReturner.return();
				}
			},
			(coin) => {
				this.coins.push(coin);
				this.displayable.displayBalance(this.getBalance());
			}
		);
		if (this.getBalance() === 0) {
			this.displayable.displayInsertCoin();
		}
	}

	private getBalance(): number {
		return this.coins.reduce((acc, coin) => acc + coin.valueInDollars(), 0);
	}
}
