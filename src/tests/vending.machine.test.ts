import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VendingMachine } from '../core/vending.machine';
import { CoinReader } from '../core/interfaces/coin.reader';
import { CoinReturner } from '../core/interfaces/coin.return';
import { Displayable } from '../core/interfaces/displayable';
import { UnknownCoin } from '../core/coin/unknown.coin';

describe('Vending machine should', () => {
	let coinReader: CoinReader;
	let coinReturner: CoinReturner;
	let displayable: Displayable;

	beforeEach(() => {
		coinReader = {
			read: vi.fn(),
		};
		coinReturner = {
			return: vi.fn(),
		};
		displayable = {
			displayInsertCoin: vi.fn(),
			displayBalance: vi.fn(),
		};
	});

	it('ignore non valid coins', () => {
		const penny = new UnknownCoin(19.05, 2.5);
		coinReader.read = vi.fn(() => penny);
		const vendingMachine = new VendingMachine(coinReader, coinReturner, displayable);

		vendingMachine.insertCoin();

		expect(coinReturner.return).toHaveBeenCalledWith(penny);
	});

  it('display insert coin when no coins inserted', () => {
    const vendingMachine = new VendingMachine(coinReader, coinReturner, displayable);

    vendingMachine.insertCoin();

    expect(displayable.displayInsertCoin).toHaveBeenCalled();
  });

  it('display balance when coins inserted', () => {
    const nickel = new UnknownCoin(21.21, 5);
    coinReader.read = vi.fn(() => nickel);
    const vendingMachine = new VendingMachine(coinReader, coinReturner, displayable);

    vendingMachine.insertCoin();
    vendingMachine.insertCoin();

    expect(displayable.displayBalance).toHaveBeenCalledWith(0.10);
  });
});
