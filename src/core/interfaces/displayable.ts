import { Result } from "../common/result";

export interface Displayable {
    displayInsertCoin(): Result<void, Error>;
    displayBalance(balance: number): Result<void, Error>;
}