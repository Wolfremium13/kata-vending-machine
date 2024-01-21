import { UnknownCoin } from "../coin/unknown.coin";

export interface CoinReader {
    read(): UnknownCoin;
}