import { UnknownCoin } from '../coin/unknown.coin';
import { Result } from '../common/result';

export interface CoinReturner {
	return(coin: UnknownCoin): Result<void, Error>;
}
