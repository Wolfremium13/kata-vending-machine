import { Coin } from "../../interfaces/coin";

export class Nickel implements Coin {
  valueInDollars(): number {
    return 0.05;
  }
  sizeInMillimeters(): number {
    return 21.21;
  }
  weightInGrams(): number {
    return 5;
  }
}