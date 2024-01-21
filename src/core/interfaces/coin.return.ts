import { Coin } from '../coin/coin';
import { Result } from '../common/result';

export interface CoinReturner {
	return(coin: Coin): Result<void, Error>;
}
