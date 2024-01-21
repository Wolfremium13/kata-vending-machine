import { CoinParams } from "../coin/coin.params";

export interface CoinReader {
	read(): CoinParams;
}
