import { describe, it, expect, beforeEach } from 'vitest';

// Total amount of coins is 0
interface Displayeable {
  display: (text: string) => void;

}

type UnknownCoin = {
  size: number;
  weigh: number;
}

enum CoinType {
  Nickel = 5,
  Dime = 10,
  Quarter = 25,
  Penny = 1,
}

class Coin {
  constructor(private readonly type: CoinType) {}

  getValue(): number {
    return this.type;
  }
}

class Display implements Displayeable {
  private text: string = 'INSERT COIN';

  display(text: string): void {
    this.text = text;
  }

  getText(): string {
    return this.text;
  }
}

class CoinReader implements CoinReader {
  read(coin: UnknownCoin): Coin {
    return new Coin(CoinType.Nickel); 
  }
}

class VendingMachine {
  private display: Display;
  private coinReader: CoinReader;
  private currentAmount: number = 0;

  constructor(display: Displayeable, coinReader: CoinReader) {
    this.display = display as Display;
    this.coinReader = coinReader as CoinReader;
  }

  insertCoin(unknownCoin: UnknownCoin): void {
    const coin = this.coinReader.read(unknownCoin);
    this.currentAmount += coin.getValue();
    this.display.display(this.currentAmount.toString());
  }

  selectProduct(productPrice: number): void {
    if (this.currentAmount >= productPrice) {
      this.display.display('THANK YOU');
      this.currentAmount -= productPrice;
    } else {
      this.display.display(`PRICE ${productPrice}`);
    }
  }

  returnCoins(): void {
    this.display.display('INSERT COIN');
    this.currentAmount = 0;
  }
}

describe('Vending Machine should', () => {
  let display: Display;
  let coinReader: CoinReader;
  let vendingMachine: VendingMachine;

  beforeEach(() => {
    display = new Display();
    coinReader = new CoinReader();
    vendingMachine = new VendingMachine(display, coinReader);
  });

  it('display "INSERT COIN" when no coin is inserted', () => {
    expect(display.getText()).toBe('INSERT COIN');
  });

  it('display the correct amount when a coin is inserted', () => {
    const unknownCoin: UnknownCoin = { size: 1, weigh: 1 };
    vendingMachine.insertCoin(unknownCoin);
    expect(display.getText()).toBe('5');
  });

  
});

