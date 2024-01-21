import { Result } from '../common/result';

export interface CoinReturner {
	return(): Result<void, Error>;
}
