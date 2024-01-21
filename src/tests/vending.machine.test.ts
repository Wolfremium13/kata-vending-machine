import { describe, it, expect, beforeEach, vi } from 'vitest';
import { VendingMachine } from '../core/vending.machine';
import { CoinReader } from '../core/interfaces/coin.reader';
import { CoinReturner } from '../core/interfaces/coin.return';
import { Displayable } from '../core/interfaces/displayable';
import { UnknownCoin } from '../core/coin/coins/unknown';
import { Nickel } from '../core/coin/coins/nickel';
import { CoinParams } from '../core/coin/coin.params';

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

	describe('when insert coins', () => {
		it('give back invalid coins', () => {
			const invalidCoin = new UnknownCoin();
			coinReader.read = vi.fn(() => new CoinParams(invalidCoin.sizeInMillimeters(), invalidCoin.weightInGrams()));
			const vendingMachine = new VendingMachine(coinReader, coinReturner, displayable);

			vendingMachine.insertCoin();

			expect(coinReturner.return).toHaveBeenCalled();
		});

		it('display insert coin when no coins inserted', () => {
			const vendingMachine = new VendingMachine(coinReader, coinReturner, displayable);

			vendingMachine.insertCoin();

			expect(displayable.displayInsertCoin).toHaveBeenCalled();
		});

		it('display balance when coins inserted', () => {
			const nickel = new Nickel();
			coinReader.read = vi.fn(() => new CoinParams(nickel.sizeInMillimeters(), nickel.weightInGrams()));
			const vendingMachine = new VendingMachine(coinReader, coinReturner, displayable);

			vendingMachine.insertCoin();
			vendingMachine.insertCoin();

			expect(displayable.displayBalance).toHaveBeenCalledWith(nickel.valueInDollars() * 2);
		});
	});
});
