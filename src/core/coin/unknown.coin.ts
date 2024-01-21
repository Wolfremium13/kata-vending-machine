import { CoinSize } from "./coin.size";
import { CoinWeight } from "./coin.weight";

export class UnknownCoin {
	constructor(readonly size: CoinSize, readonly weight: CoinWeight) {}
}
