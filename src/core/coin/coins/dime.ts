import { Coin } from "../../interfaces/coin";

export class Dime implements Coin {
    valueInDollars() {
        return 0.10;
    }
    sizeInMillimeters() {
        return 17.91;
    }
    weightInGrams() {
        return 2.268;
    }
}